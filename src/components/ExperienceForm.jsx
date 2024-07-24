import React from "react";
import { ExperienceInfo } from "./ResumeBuilder";

const ExperienceForm = () => {
  const { experiences, setExperiences } = React.useContext(ExperienceInfo);

  const [experience, setExperience] = React.useState({});

  function handleInputChange(e) {
    const { name, value } = e.target;
    setExperience({
      ...experience,
      [name]: value,
      id: Date.now(),
    });
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    //check if all fileds are added
    if (
      !experience.company ||
      !experience.position ||
      !experience.startDate ||
      !experience.endDate ||
      !experience.description
    ) {
      return;
    }

    setExperiences([...experiences, experience]);
  }
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Company Name"
          onChange={handleInputChange}
          name="company"
          value={experience.company}
        />
        <input
          type="text"
          placeholder="Position"
          name="position"
          value={experience.position}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Start Date"
          name="startDate"
          value={experience.startDate}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="End Date"
          name="endDate"
          value={experience.endDate}
          onChange={handleInputChange}
        />
        <textarea
          name="description"
          id=""
          placeholder="Enter your job description/tasks separated by ."
          value={experience.description}
          onChange={handleInputChange}
        ></textarea>
        <button onClick={handleFormSubmit}>Add</button>
      </form>
    </div>
  );
};

export default ExperienceForm;
