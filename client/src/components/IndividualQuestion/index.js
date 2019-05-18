import React from "react";
import "./style.css";

class IndividualQuestion extends React.Component {
    state= {
        value: "",
        num1: Math.floor(Math.random() * 5),
        num2: Math.floor(Math.random() * 5)
    }

    handleInput = (e) => {
        this.setState(
            {value: e.target.value
            }
            )
    }

 answerCorrect = (e) => {
        e.preventDefault();
        const answer = Number(this.state.value);
        const num1 = Number(this.state.num1);
        const num2 = Number(this.state.num2);
        console.log(answer)
        console.log(`num1 ${num1} & num2 ${num2}`)
        const corrAnsw = num1 + num2;
        console.log(corrAnsw)
        if (answer === corrAnsw) {
             console.log("correct")
        } else {
            console.log("incorrect")
        }
    }



    render() {
      return (
        <div className="individualQuestion"
        >
        <h5 name="num1">{this.state.num1}</h5>
        <h5 name="sign"> + </h5>
        <h5 name="num2">{this.state.num2}</h5>
        <h5 name="equals">=</h5>

        <input  id="input" onChange={this.handleInput} type="text" className="form-control" name="input" value={this.state.value} />
        <button onClick={this.answerCorrect}>Submit</button>
    
        </div>
      );
    }
    }

    

export default IndividualQuestion;