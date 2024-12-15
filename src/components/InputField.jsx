import { useState } from "react";

export function InputField({ inputName }) {
  const [text, setText] = useState("");

  function handleText(e) {
    setText(e.target.value);
  }

  return (
    <label>
      {inputName} <input type="text" value={text} onChange={handleText} />
    </label>
  );
}
