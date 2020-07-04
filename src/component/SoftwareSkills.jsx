import React from "react";
import Progress from "./Progress";

function SoftwareSkills() {
    const mainGrid = "col-md-6";
  return (
    <div id='skillss' className=" pt-5">
      <hr />
      <div className="row pt-5 pb-3 col-12">
        
        <div className=""></div>
        <i
          className="fas fa-star-half-alt col-1 skillsFont"
          style={{ color: "#8ec6c5" }}
        ></i>
        <h2 className="col-7 skillsFont" style={{ color: "#8ec6c5" }}>
          Skills
        </h2>
      </div>
      <div className="row">
        <div className={mainGrid}>
          <Progress sikll="HTML" Weightsikll="80%" icon="fab fa-html5" />
          <Progress sikll="CSS" Weightsikll="80%" icon="fab fa-css3-alt" />
          <Progress
            sikll="Bootstrap"
            Weightsikll="75%"
            icon="fab fa-bootstrap"
          />
          <Progress
            sikll="JavaScript"
            Weightsikll="70%"
            icon="fab fa-js-square"
          />
        </div>
        <div className={mainGrid}>
          <Progress sikll="React" Weightsikll="65%" icon="fab fa-react" />
          <Progress sikll="Git" Weightsikll="65%" icon="fab fa-git-square" />
          <Progress sikll="Node.js" Weightsikll="35%" icon="fab fa-node-js" />
          <Progress sikll="MongoDB" Weightsikll="30%" icon="fas fa-database" />
        </div>
      </div>
    </div>
  );
}

export default SoftwareSkills;
