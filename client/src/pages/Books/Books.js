import React from 'react';
import { Container } from 'reactstrap';
import NavHeader from '../../components/NavHeader';
import './Books.css';

class Books extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <NavHeader />
        <Container>
          <h1>Recommended Books</h1>
        </Container>
      </div>
    );
  }
}

export default Books;
