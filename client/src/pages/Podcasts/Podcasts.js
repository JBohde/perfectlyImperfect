import React from 'react';
import { Container } from 'reactstrap';
import NavHeader from '../../components/NavHeader';
import './Podcasts.css';

class Podcasts extends React.Component {
  state = {};

  render() {
    return (
      <>
        <NavHeader />
        <Container>
          <h1>Podcasts</h1>
        </Container>
      </>
    );
  }
}

export default Podcasts;
