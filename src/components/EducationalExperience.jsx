import { useState } from "react";
import { InputField } from "./InputField";

export function EducationalExperience({ educArray, setEducArray }) {
  const [currentEducation, setEducation] = useState();

  function getInfo(text, inputName) {
    setEducation({ ...currentEducation, [inputName]: text });
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

  return (
    <form onSubmit={addEducation}>
      <InputField
        inputName="school"
        labelText="School"
        getInfo={getInfo}
      ></InputField>
      <InputField
        inputName="titleOfStudy"
        labelText="Title of Study"
        getInfo={getInfo}
      ></InputField>
      <InputField
        inputName="dateOfStudy"
        labelText="Date of Study"
        inputType="month"
        getInfo={getInfo}
      ></InputField>
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
