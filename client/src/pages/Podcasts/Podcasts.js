import React from 'react';
import { Container } from 'reactstrap';
import NavBar from '../../components/Navbar';
import NavHeader from '../../components/NavHeader';
import './Podcasts.css';

class Podcasts extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <NavBar />
        <NavHeader />
        <Container>
          <h1>Podcasts</h1>
        </Container>
      </div>
    );
  }
}

export default Podcasts;
