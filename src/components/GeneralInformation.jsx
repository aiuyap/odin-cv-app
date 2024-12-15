import { InputField } from "./InputField";

export function GeneralInformation() {
  return (
    <form>
      <InputField inputName="Name"></InputField>
      <InputField inputName="Address"></InputField>
      <InputField inputName="Age" inputType="number"></InputField>
      <InputField inputName="Email" inputType="email"></InputField>
      <InputField inputName="Phone Number" inputType="number"></InputField>
      <div>
        <button type="submit">Submit</button> <button>Edit</button>
      </div>
    </form>
  );
}
