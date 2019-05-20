import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function SketchPad(props) {
  return (
      <div id="sketchArea">
    <h3>SketchPad</h3>
    </div>
  );
}

export default SketchPad;