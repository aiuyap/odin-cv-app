import { InputField } from "./InputField";

export function GeneralInformation({ current, update }) {
  function getInfo(text, inputName) {
    update({ ...current, [inputName]: text });
  }

  return (
    <form>
      <InputField
        inputName="name"
        labelText="Name"
        getInfo={getInfo}
      ></InputField>
      <InputField
        inputName="address"
        labelText="Address"
        getInfo={getInfo}
      ></InputField>
      <InputField
        inputName="age"
        labelText="Age"
        inputType="number"
        getInfo={getInfo}
      ></InputField>
      <InputField
        inputName="email"
        labelText="Email"
        inputType="email"
        getInfo={getInfo}
      ></InputField>
      <InputField
        inputName="phone"
        labelText="Phone Number"
        inputType="number"
        getInfo={getInfo}
      ></InputField>
    </form>
  );
}
