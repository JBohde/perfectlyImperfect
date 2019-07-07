import React from 'react';
import NavHeader from '../../components/NavHeader';
import './Shop.css';

class Shop extends React.Component {
  state = {};

  render() {
    return (
      <>
        <NavHeader />
        <div className="container">
          <h1>THIS IS THE SHOPPING PAGE</h1>
        </div>
      </>
    );
  }
}

export default Shop;
