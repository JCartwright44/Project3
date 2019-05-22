import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
import SubWorkArea from "../components/Subtraction/SubWorkArea"
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

class Subtraction extends Component {
    render() {
        return (
            <Container fluid>
            <Row>
              <Col size="md-9">
                <h1>Subtraction - Work Area</h1>
                <SubWorkArea />
              </Col>
              <Col size="md-3">
                <h1>Enter Area</h1>
              </Col>
            </Row>
          </Container>
        )
}
}

export default Subtraction;
