import React from "react";

const Education = () => {
  return (
    <>
      <div id="myEducation" className="educationSection">
        <h2 className="educationTitle">Education</h2>
        <div className="educationTimeline">
          <div className="educationCards">
            <div className="educationInstitute">
              <h4>2020-Present</h4>
              <span>Lovely Professional University</span>
            </div>
            <h2>B.Tech CSE</h2>
            <p>An enormous university with vast courses. </p>
          </div>
          <div className="educationCards">
            <div className="educationInstitute">
              <h4>2018-2019</h4>
              <span>Narayana PU College</span>
            </div>
            <h2>12th Grade</h2>
            <p>An enormous university with vast courses. </p>
          </div>
          <div className="educationCards">
            <div className="educationInstitute">
              <h4>2016-2017</h4>
              <span>Federal Public School</span>
            </div>
            <h2>10th Grade</h2>
            <p>An enormous university with vast courses. </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
