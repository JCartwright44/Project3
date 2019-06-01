import React from "react";
import "./style.css";


class EnterBtn extends React.Component {
  render() {
    return (
      <button className='button' onClick={this.props.handleOnClick}>
        Submit
      </button>
    );
  };
}
// });
export default EnterBtn;