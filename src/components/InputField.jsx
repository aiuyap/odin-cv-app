import { useState } from "react";

export function InputField({ inputName, inputType = "text", getInfo }) {
  const [text, setText] = useState("");

  function handleText(e) {
    setText(e.target.value);
    getInfo(e.target.value, inputName);
  }

  return (
    <>
      <label htmlFor={inputName}>{inputName}</label>
      <input
        type={inputType}
        value={text}
        onChange={handleText}
        id={inputName}
        required
      />
    </>
  );
}
