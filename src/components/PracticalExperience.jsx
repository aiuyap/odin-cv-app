import { InputField } from "./InputField";

export function PracticalExperience() {
  return (
    <form>
      <InputField inputName="Company Name"></InputField>
      <InputField inputName="Position Title"></InputField>
      <InputField inputName="Start Date" inputType="date"></InputField>
      <InputField inputName="End Date" inputType="date"></InputField>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
}
