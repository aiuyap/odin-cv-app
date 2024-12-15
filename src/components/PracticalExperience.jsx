import { useState } from "react";
import { InputField } from "./InputField";

export function PracticalExperience({ workArray, setWorkArray }) {
  const [currentWork, setWork] = useState();

  function getInfo(text, inputName) {
    setWork({ ...currentWork, [inputName]: text });
  }

  function addWork(e) {
    e.preventDefault();
    setWorkArray([...workArray, { ...currentWork, key: crypto.randomUUID() }]);
  }

  function removeWork(id) {
    setWorkArray((workArray) => {
      return workArray.filter((work) => work.key !== id);
    });
  }

  return (
    <form onSubmit={addWork}>
      <InputField
        inputName="companyName"
        labelText="Company Name"
        getInfo={getInfo}
      ></InputField>
      <InputField
        inputName="title"
        labelText="Position Title"
        getInfo={getInfo}
      ></InputField>
      <InputField
        inputName="startDate"
        labelText="Start Date"
        inputType="month"
        getInfo={getInfo}
      ></InputField>
      <InputField
        inputName="endDate"
        labelText="End Date"
        inputType="month"
        getInfo={getInfo}
      ></InputField>
      <div>
        <button type="submit">Add</button>
      </div>
      <ul>
        {workArray.map((work) => (
          <li key={work.key}>
            {work.companyName}{" "}
            <button type="button" onClick={() => removeWork(work.key)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </form>
  );
}
