import React from 'react';
import axios from "axios";
import NavBar from "../NavBar";
import NavHeader from "../NavHeader";
import { Row, Col, Container, Button, ButtonToolbar } from 'reactstrap';
import { Media, Player, controls } from 'react-media-player'

import "./BlogRead.css";

class BlogRead extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        user_id: this.props.match.params.id,
        current_blog: '',
        isPlaying: false
    }
  }

  render() {
    const { PlayPause, MuteUnmute } = controls;
    return (
      <div>
          <NavBar />
          <NavHeader />
          <Container>
            <Row>
              <Col xs={12} sm={12} md={2} lg={2} xl={2}></Col>
              <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                <Media>
                  <div className="media">
                    <div className="media-player">
                      <Player src="http://www.youtube.com/embed/h3YVKTxTOgU" />
                    </div>
                    <div className="media-controls">
                      <PlayPause />
                      <MuteUnmute />
                    </div>
                  </div>
                </Media>
              </Col>
          <Col xs={12} sm={12} md={2} lg={2} xl={2}></Col>
          </Row>
          </Container>
      </div>
    )
  }
}

export default BlogRead;