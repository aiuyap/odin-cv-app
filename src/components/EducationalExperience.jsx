import { useState } from "react";

export function EducationalExperience({ educArray, setEducArray }) {
  const [currentEducation, setEducation] = useState({
    school: "",
    title: "",
    date: "",
  });

  if (educArray.length > 0 && currentEducation.school === "") {
    setEducation(educArray[educArray.length - 1]);
  }

  function addEducation(e) {
    e.preventDefault();
    setEducArray([
      ...educArray,
      { ...currentEducation, key: crypto.randomUUID() },
    ]);
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
    removeEducation(id);
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
        id="title"
        required
        autoComplete="off"
      />
      <div>
        <button type="submit">Add</button>
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
//TODO: Add edit button for each education added
