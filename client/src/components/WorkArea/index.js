import React from "react";
import "./style.css";
import IndividualQuestion from "../IndividualQuestion";

function WorkArea({ children }) {
  return (
    <div className="workArea container"
    >
    <div className="row">
    <div className="col-sm">
    <IndividualQuestion />
    <IndividualQuestion />
    <IndividualQuestion />
    <IndividualQuestion />
    <IndividualQuestion />
    </div>
    <div className="col-sm">
    <IndividualQuestion />
    <IndividualQuestion />
    <IndividualQuestion />
    <IndividualQuestion />
    <IndividualQuestion />
    </div>
    </div>
      {/* {children} */}
    </div>
  );
}

export default WorkArea;