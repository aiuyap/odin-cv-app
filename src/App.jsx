import { GeneralInformation } from "./components/GeneralInformation";
import { EducationalExperience } from "./components/EducationalExperience";
import { PracticalExperience } from "./components/PracticalExperience";
import { ResultPage } from "./components/ResultPage";
import { useState } from "react";

export function App() {
  const [generalInfo, setGeneralInfo] = useState();

  function updateGenInfo(newInfo) {
    setGeneralInfo(newInfo);
  }

  console.log(generalInfo);
  return (
    <>
      <h1>CV Builder</h1>
      <div className="fields-container">
        <fieldset>
          <legend>General Information</legend>
          <GeneralInformation
            current={generalInfo}
            update={updateGenInfo}
          ></GeneralInformation>
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
      <ResultPage genInfo={generalInfo}></ResultPage>
    </>
  );
}
