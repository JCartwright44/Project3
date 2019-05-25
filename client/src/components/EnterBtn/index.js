import React from "react";
import "./style.css";


class EnterBtn extends React.Component {
  render() {
    return (
      <button onClick={this.props.handleOnClick}>
        Click This
      </button>
    );
  };
}
// });
export default EnterBtn;