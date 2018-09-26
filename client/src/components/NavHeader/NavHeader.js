import React from 'react';
import { NavLink, UncontrolledDropdown, DropdownToggle,DropdownMenu, DropdownItem} from 'reactstrap';
import Button from "../Button"

import "./NavHeader.css";

class NavHeader extends React.Component {
  render() {
    return (
      <div id="nav-header">
        <div className="row navbar-header-content">
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 navbar-social">
              <a href="https://www.facebook.com/perfectlyimperfectblogpage/" target="_blank" rel="noopener noreferrer"><img src="./if_facebook_313485.png" className="social-img" alt="fb-logo"/></a>
              <a href="https://www.instagram.com/perf_imperf2017/" target="_blank" rel="noopener noreferrer"><img src="./if_instagram_313477.png" className="social-img" alt="insta-logo"/></a>
		          <a href="https://twitter.com/perf_imperf2017" target="_blank" rel="noopener noreferrer"><img src="./if_twitter_313466.png" className="social-img" alt="twitter-logo"/></a>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 navbar-title">
            <h1 id="title">PERFECTLY<br/>IMPERFECT</h1>
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
        </div>
        < hr/>
          <div className="link-container">
            <NavLink className='navheader-link' href="/">HOME</NavLink>
            <NavLink className='navheader-link' href="/blog">BLOG</NavLink>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className='navheader-link inspire' nav caret>INSPIRATION</DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/mustsee">MUST SEES</DropdownItem>
                  <DropdownItem href="/books">BOOK SUGGESTIONS</DropdownItem>
                  <DropdownItem href="/podcasts">PODCASTS</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            <NavLink className='navheader-link' href="/about">ABOUT</NavLink>
            {/* <NavLink className= "navbar-link" to="/shop/:id">SHOP</NavLink> */}
            {/* <NavLink className= "navbar-link" to="/cart/:id">CART</NavLink> */}
          </div>
          
      </div>
    )
  }
}

export default NavHeader;