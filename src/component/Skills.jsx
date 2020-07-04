import React from "react";
import SoftwareSkills from "./SoftwareSkills";
import WorkSamples from "./WorkSamples";
import Certificate from "./Certificate";


function Skills() {
  return (
    <div>
      <div className="container">
        <div className="section">
            <SoftwareSkills />
            <Certificate />
            <WorkSamples />
        </div>
      </div>
    </div>
  );
}

export default Skills;
