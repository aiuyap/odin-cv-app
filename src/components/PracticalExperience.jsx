import { useState } from "react";

export function PracticalExperience({ workArray, setWorkArray }) {
  const emptyWork = {
    companyName: "",
    positionTitle: "",
    startDate: "",
    endDate: "",
  };

  const [currentWork, setWork] = useState(emptyWork);
  const [editMode, setEditMode] = useState(false);
  const [keyForEdit, setKeyForEdit] = useState();

  function addWork(e) {
    e.preventDefault();
    setWorkArray([...workArray, { ...currentWork, key: crypto.randomUUID() }]);
    setWork(emptyWork);
    if (editMode) {
      removeWork(keyForEdit);
      setEditMode(false);
    }
  }

  function removeWork(id) {
    setWorkArray((workArray) => {
      return workArray.filter((work) => work.key !== id);
    });
  }

  function handleText(e, id) {
    setWork({ ...currentWork, [id]: e.target.value });
  }

  function editWork(id) {
    let edit;
    workArray.forEach((work) => {
      if (work.key === id)
        edit = {
          companyName: work.companyName,
          positionTitle: work.positionTitle,
          startDate: work.startDate,
          endDate: work.endDate,
        };
    });
    setWork(edit);
    setEditMode(true);
    setKeyForEdit(id);
  }

  return (
    <form onSubmit={addWork}>
      <label htmlFor="companyName">Company Name</label>
      <input
        value={currentWork.companyName}
        type="text"
        id="companyName"
        required
        autoComplete="off"
        onChange={(e) => handleText(e, "companyName")}
      />
      <label htmlFor="positionTitle">Position Title</label>
      <input
        value={currentWork.positionTitle}
        type="text"
        id="positionTitle"
        required
        autoComplete="off"
        onChange={(e) => handleText(e, "positionTitle")}
      />
      <label htmlFor="startDate">Start Date</label>
      <input
        value={currentWork.startDate}
        type="month"
        id="startDate"
        required
        autoComplete="off"
        onChange={(e) => handleText(e, "startDate")}
      />
      <label htmlFor="endDate">End Date</label>
      <input
        value={currentWork.endDate}
        type="month"
        id="endDate"
        required
        autoComplete="off"
        onChange={(e) => handleText(e, "endDate")}
      />
      <div>
        <button type="submit">{editMode ? "Save" : "Add"}</button>
      </div>
      <ul>
        {workArray.map((work) => (
          <li key={work.key}>
            {work.companyName}{" "}
            <button type="button" onClick={() => editWork(work.key)}>
              Edit
            </button>
            <button type="button" onClick={() => removeWork(work.key)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </form>
  );
}
