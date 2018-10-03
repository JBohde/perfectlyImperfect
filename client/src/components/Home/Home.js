import React from "react";
import NavBar from "../NavBar";
import NavHeader from "../NavHeader";
import { Row, Col, Container } from 'reactstrap';
import "./Home.css";

class Home extends React.Component {

    state = {
      
    }

    render() {
        return (
        <div>
            <NavBar />
            <NavHeader />
            <Container>
                <h1>THIS IS THE HOME PAGE</h1>
            <Row>
              <Col xs={12} sm={12} md={2} lg={2} xl={2}></Col>
              <Col xs={12} sm={12} md={8} lg={8} xl={8}>
              </Col>
          <Col xs={12} sm={12} md={2} lg={2} xl={2}></Col>
          </Row>
          </Container>
        </div>
        )
    }
}

export default Home;