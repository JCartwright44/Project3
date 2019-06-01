import React from "react";
import "./style.css";
import IndividualQuestion from "../AddIndividualQuestion";

function WorkArea({ questions, onChange }) {

  console.log(questions);
  return (
    <div className="addworkArea container"
    >
    <div className="row">

    {questions.map((question, index) => (
      <div className="col-sm-6 question">
        <IndividualQuestion index={index} num1={question.num1} num2={question.num2} onChange={onChange} />
      </div>
    ))}
    
    </div>
    </div>
  );
}

export default WorkArea;