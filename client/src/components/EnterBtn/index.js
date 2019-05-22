import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
// function EnterBtn(props) {
//   return (
//     <div id="enterArea">

//       <button onClick={this.onClick}>Submit</button>
//     </div>
class EnterBtn extends React.Component {
  // }
  // render() {
  //   return <button onClick={this.handleClick}>Submit</button>;
  // }
  render() {
    return (
      <button onClick={this.props.onClick}>
        Click This
      </button>
    );
  };
}
// });


    // <span className="enter-btn" {...props} role="button" tabIndex="0">
    //   Submit
    // </span>
//   );
// }

export default EnterBtn;