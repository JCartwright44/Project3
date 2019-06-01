import React, { Component } from "react";
import WorkArea from "../components/Division/DivWorkArea"
import EnterArea from "../components/EnterArea"
import { Col, Row, Container } from "../components/Grid";
import './style.css'
import API from "../utils/API";
import axios from "axios";

class Division extends React.Component {
  state = {
    id: "",
    questions: [],
    level: ""
  }

  componentDidMount() {
    const len = 10;
    const questions = [];
    // checkLevel() 
    let idt = JSON.parse(sessionStorage.user)
    let id = idt.id;
    let level = idt.div;
    // let level = this.state.level


    this.setState({
      questions,
      id,
      level
    })
    
    if (level === 1) 
    for(let i=0; i< len; i++) {
      const first = Math.floor(Math.random() * 5 + 1);
      const second = Math.floor(Math.random() * first + 1);
      const third = first * second;
      let num1 = third;
      let num2 = first;
      questions.push({
        num1,
        num2,
        correctAnswer: second,
        userInput: null
      })
    }
    if (level === 2) 
    for(let i=0; i< len; i++) {
      const first = Math.floor(Math.random() * 10 + 1);
      const second = Math.floor(Math.random() * first + 1);
      const third = first * second;
      let num1 = third;
      let num2 = first;
      questions.push({
        num1,
        num2,
        correctAnswer: second,
        userInput: null
      })
    }
    if (level === 3) 
    for(let i=0; i< len; i++) {
      const first = Math.floor(Math.random() * 8 + 8);
      const second = Math.floor(Math.random() * first + 1);
      const third = first * second;
      let num1 = third;
      let num2 = first;
      questions.push({
        num1,
        num2,
        correctAnswer: second,
        userInput: null
      })
    }
    if (level === 4) 
    for(let i=0; i< len; i++) {
      const first = Math.floor(Math.random() * 15 + 11);
      const second = Math.floor(Math.random() * first + 1);
      const third = first * second;
      let num1 = third;
      let num2 = first;
      questions.push({
        num1,
        num2,
        correctAnswer: second,
        userInput: null
      })
    }
    if (level === 5) 
    for(let i=0; i< len; i++) {
      const first = Math.floor(Math.random() * 35 + 16);
      const second = Math.floor(Math.random() * first + 1);
      const third = first * second;
      let num1 = third;
      let num2 = first;
      questions.push({
        num1,
        num2,
        correctAnswer: second,
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
  let { history } = this.props;
  let id = this.state.id;
  let type = 'division';
  let level = this.state.level;
  let idt = JSON.parse(sessionStorage.user)
  idt.div = Number(level) + 1;
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
      alert('all correct') 
      API.update( id, type, level )
      .then(res => {
        this.setState({
          level: res.data.division
        })

        // console.log(res.data.addition)


        sessionStorage.setItem('user', JSON.stringify(idt))
        history.push("/dashboard")
      })





    } else {
      alert('try again!')
    }
}

    render() {
        return (
            <Container fluid>
            <Row>
              <Col size="md-9">
                <h1>Division - Level {this.state.level}</h1>
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

export default Division;
