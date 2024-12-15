import { InputField } from "./InputField";

export function EducationalExperience() {
  return (
    <form>
      <InputField inputName="School"></InputField>
      <InputField inputName="Title of Study"></InputField>
      <InputField inputName="Date of Study" inputType="date"></InputField>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
}
