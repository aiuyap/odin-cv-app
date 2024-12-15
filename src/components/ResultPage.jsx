export function ResultPage({ genInfo, submitted }) {
  if (submitted) {
    return (
      <div className="page">
        <div className="general-info">
          <h2>{genInfo.Name}</h2>
          <p>{genInfo.Address}</p>
          <p>{genInfo.Age}</p>
          <p>{genInfo.Email}</p>
          <p>{genInfo["Phone Number"]}</p>
        </div>
        <div className="education">
          <h2>Educational Experience</h2>
          <h3>University of Cebu</h3>
          <p>Bachelor of Science in Information Technology</p>
          <p>2015 - 2019</p>
        </div>
        <div className="work-experience">
          <h2>Work Experience</h2>
          <h3>411 Locals</h3>
          <p>Activation Tech</p>
          <p>2021 - 2024</p>
        </div>
      </div>
    );
  }
}
