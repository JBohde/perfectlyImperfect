import React from "react";
import NavBar from "../NavBar";
import NavHeader from "../NavHeader";
import { Row, Col, Container } from 'reactstrap';
import ReactPlayer from 'react-player'
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
            <Row>
              <Col xs={12} sm={12} md={1} lg={1} xl={1}></Col>
              <Col xs={12} sm={12} md={10} lg={10} xl={10}>
                {/* <video width="80%" height="auto" controls>
                    <source src="https://youtu.be/kw2EjNm1IIQ" type="video/mp4"/>
                    <source src="https://youtu.be/kw2EjNm1IIQ" type="video/ogg"/>
                    Your browser does not support HTML5 video.
                </video> */}
                <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing />
                {/* <iframe title='welcome-video' width="100%" height="500px" src="https://www.youtube.com/embed/kw2EjNm1IIQ" frameBorder="0" allow="autoplay; encrypted-media"  allowFullScreen></iframe> */}
                <div id='home'>
                    <h1 className='welcome'>PERFECTLY IMPERFECT</h1>
                    <p className="welcome">Insecurity, confusion, and mishap are as much a part of my make up as confidence, certainty, and perfection. Neither side defines me, it is the presence and   experiencing of both that make me wholly human. As I learn to value the aim of my efforts more than perception, value the journey more than the destination, and give more than Itake, I get to share the experiences and lessons with you all. I hope to provide a place where mental, spiritual, emotional and simply LIFE experiences and information are shared with the purpose of heightening awareness, unity, and growth.
                    </p>
                    <h3 className="welcome">Happy Seeking!</h3>
                    <div className="color-overlay"></div>
                </div>
               
              </Col>
          <Col xs={12} sm={12} md={1} lg={1} xl={1}></Col>
          </Row>
          </Container>
        </div>
        )
    }
}

export default Home;