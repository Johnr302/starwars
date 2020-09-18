import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Container } from "reactstrap";
import People from "./components/People";
import Ships from "./components/Ships";
import Planets from "./components/Planets";
function App() {
  return (
    <div className="App">
      <Row>
        <Col>
          <section id="people" className="lists">
            <People />
          </section>
        </Col>
        <Col>
          <section id="ship" className="lists">
            <Ships />
          </section>
        </Col>
        <Col>
          <section id="ship" className="lists">
            <Planets />
          </section>
        </Col>
      </Row>
    </div>
  );
}

export default App;
