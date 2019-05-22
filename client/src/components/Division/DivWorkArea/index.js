import React from "react";
import "./style.css";
import DivIndividualQuestion from "../DivIndividualQuestion";

function DivWorkArea({ children }) {

  // In this component, create a map for each Individual Question. Then have the functions out here. On each Individual question, that handleClick will pass the event out to this function.  
  // const number = [];
  // const listItems = IndividualQuestion.map((number) => )

  return (
    <div className="workArea container"
    >
    <div className="row">
    <div className="col-sm">
    <DivIndividualQuestion />
    <DivIndividualQuestion />
    <DivIndividualQuestion />
    <DivIndividualQuestion />
    <DivIndividualQuestion />
    </div>
    <div className="col-sm">
    <DivIndividualQuestion />
    <DivIndividualQuestion />
    <DivIndividualQuestion />
    <DivIndividualQuestion />
    <DivIndividualQuestion />
    </div>
    </div>
      {/* {children} */}
    </div>
  );
}

export default DivWorkArea;