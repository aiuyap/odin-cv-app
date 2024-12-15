import { GeneralInformation } from "./components/GeneralInformation";
import { EducationalExperience } from "./components/EducationalExperience";

export function App() {
  return (
    <>
      <h1>CV Builder</h1>
      <div className="container">
        <fieldset>
          <legend>General Information</legend>
          <GeneralInformation></GeneralInformation>
        </fieldset>
        <fieldset>
          <legend>Educational Experience</legend>
          <EducationalExperience></EducationalExperience>
        </fieldset>
      </div>
    </>
  );
}
