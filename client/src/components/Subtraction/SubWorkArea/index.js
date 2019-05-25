import React from "react";
import "./style.css";
import IndividualQuestion from "../SubIndividualQuestion";

function SubWorkArea({ questions, onChange }) {

  // In this component, create a map for each Individual Question. Then have the functions out here. On each Individual question, that handleClick will pass the event out to this function.  


  console.log(questions);
  return (
    <div className="workArea container"
    >
    <div className="row">

    {questions.map((question, index) => (
      <div className="col-sm-6">
        <IndividualQuestion index={index} num1={question.num1} num2={question.num2} onChange={onChange} />
      </div>
    ))}
    
    </div>
    </div>
  );
}

export default SubWorkArea;