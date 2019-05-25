import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

class Dashboard extends React.Component {
  state = {
    id: "",
    levelAdd: "",
    levelSub: "",
    levelMult: "",
    levelDiv: ""
  }

  componentDidMount() {
    let idt = JSON.parse(sessionStorage.user)
    let id = idt.id;
    let levelAdd = idt.add;
    let levelSub = idt.sub;
    let levelMult = idt.mult;
    let levelDiv = idt.levelDiv

    this.setState({
      id,
      levelAdd,
      levelSub,
      levelMult,
      levelDiv
    })

  }

    render() {
        return (

            <Container fluid>
            <Row>
              <Col size="md-9">
                <h1>Dashboard - Work Area</h1>
                <div>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Addition</h5>
                      <p className="card-text">Level up your addition skills here.</p>
                      <button>
                      <Link to="/addition">Go to level {this.state.levelAdd} </Link>
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Subtraction</h5>
                      <p className="card-text">Level up your subtraction skills here.</p>
                      <button>
                      <Link to="/addition">Go to level {this.state.levelAdd} </Link>
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Multiplication</h5>
                      <p className="card-text">Level up your multiplication skills here.</p>
                      <button>
                      <Link to="/addition">Go to level {this.state.levelAdd} </Link>
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Division</h5>
                      <p className="card-text">Level up your division skills here.</p>
                      <button>
                      <Link to="/addition">Go to level {this.state.levelAdd} </Link>
                      </button>
                    </div>
                  </div>
                </div>

              </Col>
              <Col size="md-3">
                <h1>Enter Area</h1>
              </Col>
            </Row>
          </Container>
        )
}
}

export default Dashboard;
