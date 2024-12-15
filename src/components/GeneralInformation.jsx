import { InputField } from "./InputField";

export function GeneralInformation() {
  return (
    <form>
      <InputField inputName="Name"></InputField>
      <InputField inputName="Address"></InputField>
      <InputField inputName="Age" inputType="number"></InputField>
      <InputField inputName="Email" inputType="email"></InputField>
      <InputField inputName="Phone Number" inputType="number"></InputField>
    </form>
  );
}
