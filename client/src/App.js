import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Blog from "./components/Blog";
import Shop from "./components/Shop";
import Cart from "./components/Cart";


import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className = "main">
          <Route exact path="/" component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/shop/:id" component={Shop} />
          <Route path="/cart/:id" component={Cart} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
