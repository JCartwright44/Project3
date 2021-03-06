import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import './style.css';

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
    let levelDiv = idt.div

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

            <Container fluid className='full-height'>
            <Row>
              <Col size="md-6">
                <div>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Addition</h5>
                      <p className="card-text">Level up your addition skills here.</p>
                      <button type='button' class="btn btn-outline-info">
                      <Link id="linkTo" to="/addition">Go to level {this.state.levelAdd}      --></Link>
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Multiplication</h5>
                      <p className="card-text">Level up your multiplication skills here.</p>
                      <button type='button' class="btn btn-outline-info">
                      <Link id="linkTo" to="/multiplication">Go to level {this.state.levelMult}       --></Link>
                      </button>
                    </div>
                  </div>
                </div>
                


              </Col>
              <Col size="md-6">
              <div>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Subtraction</h5>
                      <p className="card-text">Level up your subtraction skills here.</p>
                      <button type='button' class="btn btn-outline-info">
                      <Link id="linkTo" to="/subtraction">Go to level {this.state.levelSub}       --></Link>
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Division</h5>
                      <p className="card-text">Level up your division skills here.</p>
                      <button type='button' class="btn btn-outline-info">
                      <Link id="linkTo" to="/division">Go to level {this.state.levelDiv}       --></Link>
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        )
}
}

export default Dashboard;
