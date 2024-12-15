import { GeneralInformation } from "./components/GeneralInformation";
import { EducationalExperience } from "./components/EducationalExperience";
import { PracticalExperience } from "./components/PracticalExperience";
import { ResultPage } from "./components/ResultPage";
import { useState } from "react";

export function App() {
  const [generalInfo, setGeneralInfo] = useState();
  const [educArray, setEducArray] = useState([]);
  const [workArray, setWorkArray] = useState([]);

  const [generateClicked, setGenerateClicked] = useState(false);

  function updateGenInfo(newInfo) {
    setGeneralInfo(newInfo);
  }

  function handleSubmit() {
    setGenerateClicked(true);
  }

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
          <EducationalExperience
            educArray={educArray}
            setEducArray={setEducArray}
          ></EducationalExperience>
        </fieldset>
        <fieldset>
          <legend>Practical Experience</legend>
          <PracticalExperience
            workArray={workArray}
            setWorkArray={setWorkArray}
          ></PracticalExperience>
        </fieldset>
      </div>
      <div>
        <button onClick={handleSubmit}>Generate CV</button>
      </div>
      {generateClicked && (
        <ResultPage
          genInfo={generalInfo}
          education={educArray}
          work={workArray}
        ></ResultPage>
      )}
    </>
  );
}
