import React  from "react";
import WorkArea from "../components/Multiplication/MultWorkArea"
import EnterArea from "../components/EnterArea"
import { Col, Row, Container } from "../components/Grid";
import './style.css'
import API from "../utils/API";

class Multiplication extends React.Component {
  state = {
    id: "",
    questions: [],
    level: ""
  }

  componentDidMount() {
    const len = 10;
    const questions = [];
    let idt = JSON.parse(sessionStorage.user)
    let id = idt.id;
    let level = idt.mult;

    this.setState({
      questions,
      id,
      level
    })
    
    if (level === 1) 
    for(let i=0; i< len; i++) {
      const num1 = Math.floor(Math.random() * 5)
      const num2 = Math.floor(Math.random() * 5)
      questions.push({
        num1,
        num2,
        correctAnswer: num1 * num2,
        userInput: null
      })
    }
    if (level === 2) 
    for(let i=0; i< len; i++) {
      const num1 = Math.floor(Math.random() * 10)
      const num2 = Math.floor(Math.random() * 10)
      questions.push({
        num1,
        num2,
        correctAnswer: num1 * num2,
        userInput: null
      })
    }
    if (level === 3) 
    for(let i=0; i< len; i++) {
      const num1 = Math.floor(Math.random() * 8 + 6)
      const num2 = Math.floor(Math.random() * 8 + 6)
      questions.push({
        num1,
        num2,
        correctAnswer: num1 * num2,
        userInput: null
      })
    }
    if (level === 4) 
    for(let i=0; i< len; i++) {
      const num1 = Math.floor(Math.random() * 15 + 9)
      const num2 = Math.floor(Math.random() * 15 + 9)
      questions.push({
        num1,
        num2,
        correctAnswer: num1 * num2,
        userInput: null
      })
    }
    if (level === 5) 
    for(let i=0; i< len; i++) {
      const num1 = Math.floor(Math.random() * 35 + 14)
      const num2 = Math.floor(Math.random() * 35 + 14)
      questions.push({
        num1,
        num2,
        correctAnswer: num1 * num2,
        userInput: null
      })
    }
    
  }

onChange = (index, value) => {
const updatedQuestion = {
  ...this.state.questions[index],
  userInput: value
};

const questions = [
  ...this.state.questions.slice(0, index),
  updatedQuestion,
  ...this.state.questions.slice(index+1)
];

this.setState({questions})
}

handleOnClick = (e) => {
  // compare the correctAnswer to userInput for each question in the array
  const answerKey = [];
  const len = 10;
  let total = 0;
  var modal = document.getElementById("myModal");
  var modal2 = document.getElementById("myModal2");
  let { history } = this.props;
  let id = this.state.id;
  let type = 'multiplication';
  let level = this.state.level;
  let idt = JSON.parse(sessionStorage.user)
  idt.mult = Number(level) + 1;
  if (idt.mult > 5) {
    idt.mult = 5
  }
  for (let i = 0; i < len; i++) {
    if (this.state.questions[i].correctAnswer === this.state.questions[i].userInput) {
      answerKey.push(1)
    } else {
      answerKey.push(0)
    }
  }
  for (let j = 0; j < len; j++) {
    total = total + answerKey[j];
    }
    if (total === 10) {
      modal.style.display = "block";
      // alert('all correct') 
      API.update( id, type, level )
      .then(res => {
        this.setState({
          level: res.data.multiplication
        })

        // console.log(res.data.addition)


        sessionStorage.setItem('user', JSON.stringify(idt))
        setTimeout(function () {
          history.push("/dashboard")
        }, 5000)
      })

    } else {
      modal2.style.display = "block";
      setTimeout(function () {
        modal2.style.display = "none";
      }, 5000)
      // alert('try again!')
    }
}

    render() {
        return (
            <Container fluid>
            <Row>
              <Col size="md-9">
                <h1>Multiplication - Level {this.state.level}</h1>
                <div id="myModal" class="modal">
                  <div class="modal-content">
                    <p>Congrats! You passed this level.</p>
                    <p>You will be taken back to the dashboard.</p>
                  </div>
                </div>
                <div id="myModal2" class="modal">
                  <div class="modal-content">
                    <p>Sorry, there are one or more that are incorrect.</p>
                    <p>Look over your answers carefully. You can do it!</p>
                  </div>
                </div>
                <WorkArea questions={this.state.questions} onChange={this.onChange}/>
              </Col>
              <Col size="md-3">
                <h1> </h1>
                <EnterArea handleOnClick={this.handleOnClick}/>
              </Col>
            </Row>
          </Container>
        )
}
}

export default Multiplication;
