import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Admin from "./components/Admin";
// import MyEditor from "./components/MyEditor";
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <NavBar />
        <div className = "main">
          <Route exact path="/" component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/shop/:id" component={Shop} />
          <Route path="/cart/:id" component={Cart} />
          <Route path="/admin" component={Admin} />
        </div>
        <Footer />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
