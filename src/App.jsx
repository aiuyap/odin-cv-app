import { GeneralInformation } from "./components/GeneralInformation";

export function App() {
  return (
    <div className="container">
      <h1>CV Builder</h1>
      <fieldset>
        <legend>General Information</legend>
        <GeneralInformation></GeneralInformation>
      </fieldset>
    </div>
  );
}
