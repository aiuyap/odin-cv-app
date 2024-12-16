import { useState } from "react";

export function EducationalExperience({ educArray, setEducArray }) {
  const emptyEduc = {
    school: "",
    title: "",
    date: "",
  };
  const [currentEducation, setEducation] = useState(emptyEduc);
  const [editMode, setEditMode] = useState(false);
  const [keyForEdit, setKeyForEdit] = useState();

  function addEducation(e) {
    e.preventDefault();
    setEducArray([
      ...educArray,
      { ...currentEducation, key: crypto.randomUUID() },
    ]);
    setEducation(emptyEduc);

    if (editMode) {
      removeEducation(keyForEdit);
      setEditMode(false);
    }
  }

  function removeEducation(id) {
    setEducArray((educArray) => {
      return educArray.filter((educ) => educ.key !== id);
    });
  }

  function editEducation(id) {
    let edit;
    educArray.forEach((educ) => {
      if (educ.key === id)
        edit = { school: educ.school, title: educ.title, date: educ.date };
    });
    setEducation(edit);
    setEditMode(true);
    setKeyForEdit(id);
  }

  function handleText(e, id) {
    setEducation({ ...currentEducation, [id]: e.target.value });
  }

  return (
    <form onSubmit={addEducation}>
      <label htmlFor="school">School</label>
      <input
        value={currentEducation.school}
        onChange={(e) => handleText(e, "school")}
        type="text"
        id="school"
        required
        autoComplete="off"
      />
      <label htmlFor="title">Title Of Study</label>
      <input
        value={currentEducation.title}
        onChange={(e) => handleText(e, "title")}
        type="text"
        id="title"
        required
        autoComplete="off"
      />
      <label htmlFor="date">Date Of Study</label>
      <input
        value={currentEducation.date}
        onChange={(e) => handleText(e, "date")}
        type="month"
        id="date"
        required
        autoComplete="off"
      />
      <div>
        <button type="submit">{editMode ? "Save" : "Add"}</button>
      </div>
      <ul>
        {educArray.map((educ) => (
          <li key={educ.key}>
            {educ.school}{" "}
            <button type="button" onClick={() => editEducation(educ.key)}>
              Edit
            </button>
            <button type="button" onClick={() => removeEducation(educ.key)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </form>
  );
}
