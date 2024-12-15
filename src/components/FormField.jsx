import { InputField } from "./InputField";

export function FormField() {
  return (
    <form>
      <InputField inputName="Name: "></InputField>
      <label>
        Address: <input type="text" />
      </label>
      <label>
        Age: <input type="text" />
      </label>
      <label>
        Email: <input type="email" />
      </label>
      <label>
        Phone Number: <input type="number" max={3} />
      </label>
    </form>
  );
}
