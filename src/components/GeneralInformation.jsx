import { InputField } from "./InputField";

export function GeneralInformation({ current, update }) {
  function getInfo(text, inputName) {
    const newInfo = current;
    update({ ...newInfo, [inputName]: text });
  }

  return (
    <form>
      <InputField inputName="Name" getInfo={getInfo}></InputField>
      <InputField inputName="Address" getInfo={getInfo}></InputField>
      <InputField inputName="Age" inputType="number" getInfo={getInfo}></InputField>
      <InputField inputName="Email" inputType="email" getInfo={getInfo}></InputField>
      <InputField
        inputName="Phone Number"
        inputType="number"
        getInfo={getInfo}
      ></InputField>
    </form>
  );
}
