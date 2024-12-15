import { GeneralInformation } from "./components/GeneralInformation";
import { EducationalExperience } from "./components/EducationalExperience";
import { PracticalExperience } from "./components/PracticalExperience";
import { ResultPage } from "./components/ResultPage";

export function App() {
  return (
    <>
      <h1>CV Builder</h1>
      <div className="fields-container">
        <fieldset>
          <legend>General Information</legend>
          <GeneralInformation></GeneralInformation>
        </fieldset>
        <fieldset>
          <legend>Educational Experience</legend>
          <EducationalExperience></EducationalExperience>
        </fieldset>
        <fieldset>
          <legend>Practical Experience</legend>
          <PracticalExperience></PracticalExperience>
        </fieldset>
      </div>
      <ResultPage></ResultPage>
    </>
  );
}
