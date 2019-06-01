import React from "react";
import WorkArea from "../components/Addition/AddWorkArea"
import EnterArea from "../components/EnterArea"
import { Col, Row, Container } from "../components/Grid";
import Modal from 'reactjs-popup';
import './style.css'
import API from "../utils/API";


class Addition extends React.Component {
  state = {
    id: "",
    questions: [],
    level: "",
    pass: "",
    fail: ""

  }

  componentDidMount() {
    const len = 10;
    const questions = [];
    let idt = JSON.parse(sessionStorage.user)
    let id = idt.id;
    let level = idt.add;


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
        correctAnswer: num1 + num2,
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
        correctAnswer: num1 + num2,
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
        correctAnswer: num1 + num2,
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
        correctAnswer: num1 + num2,
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
        correctAnswer: num1 + num2,
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

// PopupExample =  () => (
//   <Popup trigger={<button> Trigger</button>} position="right center">
//     <div>Popup content here !!</div>
//   </Popup>
// )

// update = (onUpdate) => {
//   const { history } = this.props;
//   let id = this.state.id;
//   let type = 'addition';
//   let level = this.state.level;
//   API.update( {id, type, level} )
//   .then(res => {
//     onUpdate(res.data)
//     history.push("/dashboard");
//   })

// }

handleOnClick = (e) => {
  // compare the correctAnswer to userInput for each question in the array
  const answerKey = [];
  const len = 10;
  let total = 0;
  let { history } = this.props;
  let id = this.state.id;
  let type = 'addition';
  let level = this.state.level;
  let idt = JSON.parse(sessionStorage.user)
  idt.add = Number(level) + 1;
  if (idt.att > 5) {
    idt.add = 5
  }
  console.log(idt)
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
            API.update( id, type, level )
      .then(res => {
        this.setState({
          level: res.data.addition
        })

        sessionStorage.setItem('user', JSON.stringify(idt))
        const Modal =  () => (
          <Modal
            trigger={<button className="button"> Open Modal </button>}
            modal
            closeOnDocumentClick
          >
            <span> Modal content </span>
          </Modal>
        )
        // history.push("/dashboard")
      })


    } else {
      alert('try again!')
    }
}

    render() {
      // if (this.state.pass === "pass"){
      //       return (
      //         <Container fluid>
      //           <div>
      //             <h1>
      //               Congrats, you got them all right!
      //             </h1>
      //             <button className='button' onClick={this.props.OnClick}>
      //               Back to Dashboard
      //             </button>
      //           </div>
      //         </Container>
      //       )
      // }
        return (

            <Container fluid className="full-height">
            <Row>
              <Col id='contain' size="md-9">
                <h1>Addition - Level {this.state.level}</h1>
                <Modal />
                <WorkArea questions={this.state.questions} onChange={this.onChange}/>
              </Col>
              <Col className='contain' size="md-3">
                <EnterArea handleOnClick={this.handleOnClick}/>
              </Col>
            </Row>
                      </Container>
        )
}
}

export default Addition;
