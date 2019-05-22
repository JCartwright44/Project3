import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
import WorkArea from "../components/Addition/AddWorkArea"
import EnterArea from "../components/EnterArea"
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

// triggerFoo() {
//   this.foo.toggle();
// }


class Addition extends React.Component {
    render() {
        return (
            <Container fluid>
            <Row>
              <Col size="md-9">
                <h1>Addition - Work Area</h1>
                <WorkArea />
              </Col>
              <Col size="md-3">
                <h1>Enter Area</h1>
                <EnterArea />
              </Col>
            </Row>
            {/* <div>
              <Foo ref={foo => this.foo = foo} />
              <Button onClick={this.triggerFoo.bind(this)}/>
            </div> */}
          </Container>
        )
}
}

export default Addition;
