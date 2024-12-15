import { useState } from "react";

export function InputField({ labelText, inputName, inputType = "text", getInfo }) {
  const [text, setText] = useState("");

  function handleText(e) {
    setText(e.target.value);
    getInfo(e.target.value, inputName);
  }

  return (
    <>
      <label htmlFor={inputName}>{labelText}</label>
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
