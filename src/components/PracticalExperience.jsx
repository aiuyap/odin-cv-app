import { InputField } from "./InputField";

export function PracticalExperience() {
  return (
    <form>
      <InputField inputName="Company Name"></InputField>
      <InputField inputName="Position Title"></InputField>
      <InputField inputName="Main Responsibility"></InputField>
      <label>Dates worked</label>
      <InputField inputName="From" inputType="date"></InputField>
      <InputField inputName="To" inputType="date"></InputField>
    </form>
  );
}
