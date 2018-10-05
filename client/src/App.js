import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import BlogRead from "./components/BlogRead";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Admin from "./components/Admin";
import About from "./components/About";
import Inspiration from "./components/Inspiration";
// import MyEditor from "./components/MyEditor";
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <div className="App-content">
          <Route exact path="/" component={Home} />
          <Route path="/blogs" component={Blogs} />
          {/* <Route path='/blog/:id' component={BlogRead} /> */}
          <Route path='/blog' component={BlogRead} />
          <Route path="/inspiration" component={Inspiration} />
          <Route path="/about" component={About} />
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
