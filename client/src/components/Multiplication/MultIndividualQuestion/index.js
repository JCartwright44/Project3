import React from "react";
// import EnterBtn, { handleClick } from "../../EnterBtn"
import "./style.css";

class MultIndividualQuestion extends React.Component {
  state= {
    value: "",
    num1: "",
    num2: "",
    foo: false
}

componentWillMount() {
const num1 = Math.floor(Math.random() * 5)
const num2 = Math.floor(Math.random() * num1)
this.setState({
num1: num1,
num2: num2
})
}
    toggle() {
        this.setState({
          foo: !this.state.foo
        });
      }

    handleInput = (e) => {
        this.setState(
            {value: e.target.value
            }
            )
    }

    handleClick = (e) => {
        e.preventDefault();
        const answer = Number(this.state.value);
        const num1 = Number(this.state.num1);
        const num2 = Number(this.state.num2);
        console.log(answer)
        console.log(`num1 ${num1} & num2 ${num2}`)
        const corrAnsw = num1 * num2;
        console.log(corrAnsw)
        if (answer === corrAnsw) {
             console.log("correct")
        } else {
            console.log("incorrect")
        }
    }



    render() {
      return (
          <div>
        <div className="individualQuestion"
        >
        <h5 name="num1" id='num1'>{this.state.num1}</h5>
        <h5 name="sign" id='sign'> * </h5>
        <h5 name="num2" id='num2'>{this.state.num2}</h5>
        <h5 name="equals" id='equals'>=</h5>

        <input  id="input" onChange={this.handleInput} type="text" className="form-control" name="input" value={this.state.value} />
        <button id='button' onClick={this.handleClick}>Submit</button>
    
        </div>

        <div>
            Foo Triggered: {this.state.foo.toString()}
        </div>
        </div>
      );
    }
    }

    

export default MultIndividualQuestion;