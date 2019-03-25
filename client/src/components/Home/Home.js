import React, { Fragment } from "react";
import { Row, Col, Container } from 'reactstrap';
import NavBar from "../Navbar";
import NavHeader from "../NavHeader";
import AdSense from '../AdSense';

import "./Home.css";

class Home extends React.Component {

    state = {

    }

    render() {
        return (
        <Fragment>
            <NavBar />
            <NavHeader />
            <Container>
            <Row>
              <Col xs={12} sm={12} md={1} lg={1} xl={1}></Col>
              <Col xs={12} sm={12} md={10} lg={10} xl={10}>
                <div className="video-container">
                    <video width="400" controls>
                    <source type="video/mp4" src="../Video.MOV" />
                    </video>
                </div>
                <div id='home'>
                    <h1 className='welcome'>PERFECTLY IMPERFECT</h1>
                    <p className="welcome">Insecurity, confusion, and mishap are as much a part of my make up as confidence, certainty, and perfection. Neither side defines me, it is the presence and   experiencing of both that make me wholly human. As I learn to value the aim of my efforts more than perception, value the journey more than the destination, and give more than I take, I get to share the experiences and lessons with you all. I hope to provide a place where mental, spiritual, emotional and simply LIFE experiences and information are shared with the purpose of heightening awareness, and unity.
                    </p>
                    <h3 className="welcome">Happy Seeking!</h3>
                    <div className="color-overlay"></div>
                </div>
                <AdSense />
              </Col>
          <Col xs={12} sm={12} md={1} lg={1} xl={1}></Col>
          </Row>
          </Container>
        </Fragment>
        )
    }
}

export default Home;