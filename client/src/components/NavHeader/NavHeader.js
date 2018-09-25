import React from 'react';
import { Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown, Image, Col, Row } from 'react-bootstrap';
import Button from "../Button"

import "./NavHeader.css";

class NavHeader extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row navbar-header-content">
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 navbar-social">
              <a href="https://www.facebook.com/perfectlyimperfectblogpage/" target="_blank" rel="noopener noreferrer"><img src="./if_facebook_313485.png" className="social-img" alt="fb-logo"/></a>
              <a href="https://www.instagram.com/perf_imperf2017/" target="_blank" rel="noopener noreferrer"><img src="./if_instagram_313477.png" className="social-img" alt="insta-logo"/></a>
		          <a href="https://twitter.com/perf_imperf2017" target="_blank" rel="noopener noreferrer"><img src="./if_twitter_313466.png" className="social-img" alt="twitter-logo"/></a>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 navbar-title">
            <h1 id="title">PERFECTLY IMPERFECT</h1>
            {/* <div className='header-logo'><Image src="./pi-logo.jpg" fluid roundedCircle/></div> */}
            <p id="seek">Happy Seeking...</p>
          </div>
          <div className=" col-12 col-sm-12 col-md-3 col-lg-3 navbar-subscribe">
            <Button
              class='outline-primary'
              id='subscribe'
              label='SUBSCRIBE'
              onClick={this.onSubcribe}
            />
          </div>
          < br/>
          
        </div>
          <div className="link-container">
            <Nav.Link className='navheader-link' href="/">HOME</Nav.Link>
            <Nav.Link className='navheader-link' href="/blog">BLOG</Nav.Link>
              <NavDropdown className='navheader-link inspire' title="INSPIRATION" href="/inspiration" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/mustsee">MUST SEES</NavDropdown.Item>
                <NavDropdown.Item href="/books">BOOK SUGGESTIONS</NavDropdown.Item>
                <NavDropdown.Item href="/podcasts">PODCASTS</NavDropdown.Item>
              </NavDropdown>
            <Nav.Link className='navheader-link' href="/about">ABOUT</Nav.Link>
            {/* <Nav.Link className= "navbar-link" to="/shop/:id">SHOP</Nav.Link> */}
            {/* <Nav.Link className= "navbar-link" to="/cart/:id">CART</Nav.Link> */}
          </div>
          < hr/>
      </div>
    )
  }
}

export default NavHeader;