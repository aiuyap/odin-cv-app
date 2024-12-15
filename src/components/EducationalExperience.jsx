import { useState } from "react";

export function EducationalExperience({ educArray, setEducArray }) {
  const [currentEducation, setEducation] = useState({
    school: "",
    title: "",
    date: "",
  });

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
            <button type="button" onClick={() => removeEducation(educ.key)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </form>
  );
}
