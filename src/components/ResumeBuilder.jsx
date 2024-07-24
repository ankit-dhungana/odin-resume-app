import React, { useContext } from "react";
import Header from "./Header";
import FormSection from "./FormSection";
import InfoSection from "./InfoSection";

export const ExperienceInfo = React.createContext();

const ResumeBuilder = () => {
  const [experiences, setExperiences] = React.useState([]);
  return (
    <div>
      <Header />
      <ExperienceInfo.Provider value={{ experiences, setExperiences }}>
        <FormSection />
        <InfoSection />
      </ExperienceInfo.Provider>
    </div>
  );
};

export default ResumeBuilder;
