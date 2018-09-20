import React from 'react';
import { Link } from "react-router-dom";
import Button from "../Button"

import "./NavHeader.css";

class NavHeader extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row navbar-header-content">
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 navbar-social">
              <a href="https://www.facebook.com/perfectlyimperfectblogpage/" target="_blank" rel="noopener noreferrer"><img src="../assets/social_img/if_facebook_313485.png" className="socialImg" alt="fb-logo"/></a>
              <a href="https://www.instagram.com/perf_imperf2017/" target="_blank" rel="noopener noreferrer"><img src="../assets/social_img/if_instagram_313477.png" className="socialImg" alt="insta-logo"/></a>
		          <a href="https://twitter.com/perf_imperf2017" target="_blank" rel="noopener noreferrer"><img src="../../assets/social_img/if_twitter_313466.png" className="socialImg" alt="twitter-logo"/></a>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 navbar-title">
            <h1>PERFECTLY IMPERFECT</h1>
            <p id="seek">Happy Seeking</p>
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
          < hr/>
        </div>
          <div className="link-container">
            <Link className="navbar-link" to="/">HOME</Link>
            <Link className="navbar-link" to="/blog">BLOG</Link>
            <Link className="navbar-link" to="/inspiration">INSPIRATION</Link>
            <Link className="navbar-link" to="/about">ABOUT</Link>
            {/* <Link className= "navbar-link" to="/shop/:id">SHOP</Link> */}
            {/* <Link className= "navbar-link" to="/cart/:id">CART</Link> */}
          </div>
        
      </div>
    )
  }
}

export default NavHeader;