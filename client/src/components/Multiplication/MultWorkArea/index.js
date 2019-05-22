import React from "react";
import "./style.css";
import MultIndividualQuestion from "../MultIndividualQuestion";

function MultWorkArea({ children }) {

  // In this component, create a map for each Individual Question. Then have the functions out here. On each Individual question, that handleClick will pass the event out to this function.  
  // const number = [];
  // const listItems = IndividualQuestion.map((number) => )

  return (
    <div className="workArea container"
    >
    <div className="row">
    <div className="col-sm">
    <MultIndividualQuestion />
    <MultIndividualQuestion />
    <MultIndividualQuestion />
    <MultIndividualQuestion />
    <MultIndividualQuestion />
    </div>
    <div className="col-sm">
    <MultIndividualQuestion />
    <MultIndividualQuestion />
    <MultIndividualQuestion />
    <MultIndividualQuestion />
    <MultIndividualQuestion />
    </div>
    </div>
      {/* {children} */}
    </div>
  );
}

export default MultWorkArea;