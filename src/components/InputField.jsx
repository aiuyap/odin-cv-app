import { useState } from "react";

export function InputField({ inputName, inputType = "text" }) {
  const [text, setText] = useState("");

  function handleText(e) {
    setText(e.target.value);
  }

  return (
    <>
      <label htmlFor={inputName}>{inputName}</label>
      <input type={inputType} value={text} onChange={handleText} id={inputName} />
    </>
  );
}
