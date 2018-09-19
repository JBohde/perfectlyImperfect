import React from 'react';
import { Link } from "react-router-dom";
import Button from "../Button"

import "./NavHeader.css";

class NavHeader extends React.Component {
  render() {
    return (
      <div className="container">
      <div className="col-md-12">
        <span className="navbar-title">
          <h1>PERFECTLY IMPERFECT</h1>
          <p id="seek">Happy Seeking</p>
        </span>
        <Button
          class='outline-primary'
          id='subscribe'
          label='SUBSCRIBE'
          onClick={this.onSubcribe}
        />
        < br/>
        < hr/>
        <div className="link-container">
          <Link className="navbar-link" to="/">HOME</Link>
          <Link className="navbar-link" to="/blog">BLOG</Link>
          <Link className="navbar-link" to="/inspiration">INSPIRATION</Link>
          <Link className="navbar-link" to="/about">ABOUT</Link>
          {/* <Link className= "navbar-link" to="/shop/:id">SHOP</Link> */}
          {/* <Link className= "navbar-link" to="/cart/:id">CART</Link> */}
        </div>
      </div>
      </div>
    )
  }
}

export default NavHeader;