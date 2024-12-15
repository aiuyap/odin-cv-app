import { FormField } from "./components/FormField";

export function App() {
  return (
    <div className="container">
      <h1>CV Builder</h1>
      <fieldset>
        <legend>General Information</legend>
        <FormField></FormField>
      </fieldset>
    </div>
  );
}
