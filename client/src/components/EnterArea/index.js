import React from "react";
import "./style.css";
import EnterBtn from "../EnterBtn";
import SketchPad from "../SketchPad"

function EnterArea({ handleOnClick }) {
  return (
    <div className="enterArea container"
    >
    <div className="row">
        <SketchPad />
    </div>
    <div className="row">
        <EnterBtn handleOnClick={handleOnClick}/>
    </div>
    </div>
  );
}

export default EnterArea;