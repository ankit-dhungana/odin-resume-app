import React from "react";
import { ExperienceInfo } from "./ResumeBuilder";
const InfoSection = () => {
  const { experiences, setExperiences } = React.useContext(ExperienceInfo);

  function handleDelete(id) {
    setExperiences(experiences.filter((exp) => exp.id !== id));
  }

  //TODO: Just a TODO for now

  return (
    <div>
      {experiences.map((exp) => (
        <div key={exp.id}>
          <h3>{exp.company}</h3>
          <h4>{exp.position}</h4>
          <p>
            {exp.startDate} - {exp.endDate}
          </p>
          {exp.description
            .split(".")
            .map((line, id = Date.now()) => line && <li key={id}>{line}</li>)}
          {experiences.length > 0 && (
            <button onClick={() => handleDelete(exp.id)}>Delete</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default InfoSection;
