import React from 'react';
import NavBar from '../../components/Navbar';
import NavHeader from '../../components/NavHeader';
import './Shop.css';

class Shop extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <NavBar />
        <NavHeader />
        <div className="container">
          <h1>THIS IS THE SHOPPING PAGE</h1>
        </div>
      </div>
    );
  }
}

export default Shop;
