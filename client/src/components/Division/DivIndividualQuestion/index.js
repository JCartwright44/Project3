import React from "react";
// import EnterBtn, { handleClick } from "../../EnterBtn"
import "./style.css";

class DivIndividualQuestion extends React.Component {

    handleInput = (e) => {
        const { index, onChange } = this.props;
        const value = Number(e.target.value);
        this.setState({value});
        onChange(index, value);
    }


    render() {
      return (
          <div>
        <div className="individualQuestion"
        >
        <h5 name="num1" id='num1'>{this.props.num1}</h5>
        <h5 name="sign" id='sign'> / </h5>
        <h5 name="num2" id='num2'>{this.props.num2}</h5>
        <h5 name="equals" id='equals'>=</h5>

        <input  id="input" onChange={this.handleInput} type="number" className="form-control" name="input" value={this.props.userInput} />
   
        </div>
        </div>
      );
    }
    }

    

export default DivIndividualQuestion;