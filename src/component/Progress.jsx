import React from "react";

function Progress(props) {
  const pTagGrid = "col-3 pt-2";
  const ProgessGrid = "col-8 pt-3";
  const IconGrid = "col-1  fa-2x";

  return (
    <div className="row">
      <div className={IconGrid}>
        <i className={props.icon} style={{ color: "#11999e" }}></i>
      </div>
      <div className={pTagGrid}>
        <p>{props.sikll}</p>
      </div>
      <div className={ProgessGrid}>
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated bg-info"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: props.Weightsikll }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Progress;