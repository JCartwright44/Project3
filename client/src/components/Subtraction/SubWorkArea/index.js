import React from "react";
import "./style.css";
import SubIndividualQuestion from "../SubIndividualQuestion";

function WorkArea({ children }) {

  // In this component, create a map for each Individual Question. Then have the functions out here. On each Individual question, that handleClick will pass the event out to this function.  
  // const number = [];
  // const listItems = IndividualQuestion.map((number) => )

  return (
    <div className="workArea container"
    >
    <div className="row">
    <div className="col-sm">
    <SubIndividualQuestion />
    <SubIndividualQuestion />
    <SubIndividualQuestion />
    <SubIndividualQuestion />
    <SubIndividualQuestion />
    </div>
    <div className="col-sm">
    <SubIndividualQuestion />
    <SubIndividualQuestion />
    <SubIndividualQuestion />
    <SubIndividualQuestion />
    <SubIndividualQuestion />
    </div>
    </div>
      {/* {children} */}
    </div>
  );
}

export default WorkArea;