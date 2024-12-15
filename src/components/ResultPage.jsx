import { Fragment } from "react";

export function ResultPage({ genInfo, education, work }) {
  console.log(education);
  console.log(work);
  return (
    <div className="page">
      <div className="general-info">
        <h2>{genInfo.name}</h2>
        <p>{genInfo.address}</p>
        <p>{genInfo.age}</p>
        <p>{genInfo.email}</p>
        <p>{genInfo.phone}</p>
      </div>
      <div className="education">
        <h2>Educational Experience</h2>
        {education.map((educ) => {
          return (
            <Fragment key={educ.key}>
              <h3>{educ.school}</h3>
              <p>{educ.titleOfStudy}</p>
              <p>{educ.dateOfStudy}</p>
            </Fragment>
          );
        })}
      </div>
      <div className="work-experience">
        <h2>Work Experience</h2>
        {work.map((work) => {
          return (
            <Fragment key={work.key}>
              <h3>{work.companyName}</h3>
              <p>{work.title}</p>
              <p>
                {work.startDate} - {work.endDate}
              </p>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
