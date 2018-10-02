import React from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavLink, NavItem, UncontrolledDropdown, DropdownToggle,DropdownMenu, DropdownItem} from 'reactstrap';
import MyModal from '../Modal';

import "./NavHeader.css";

class NavHeader extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div id="nav-header">
        <div className="row navbar-header-content">
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 navbar-social">
              <a href="https://www.facebook.com/perfectlyimperfectblogpage/" target="_blank" rel="noopener noreferrer"><img src="./assets/images/if_facebook_313485.png" className="social-img" alt="fb-logo"/></a>
              <a href="https://www.instagram.com/perf_imperf2017/" target="_blank" rel="noopener noreferrer"><img src="./assets/images/if_instagram_313477.png" className="social-img" alt="insta-logo"/></a>
		          <a href="https://twitter.com/perf_imperf2017" target="_blank" rel="noopener noreferrer"><img src="./assets/images/if_twitter_313466.png" className="social-img" alt="twitter-logo"/></a>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 navbar-title">
            <h2 id="title">PERFECTLY IMPERFECT</h2>
            {/* <div className='header-logo'><Image src="./pi-logo.jpg" fluid roundedCircle/></div> */}
            <p id="seek">Happy Seeking...</p>
          </div>
          <div className=" col-12 col-sm-12 col-md-3 col-lg-3 navbar-subscribe">
            <MyModal 
              id='subscribe'
              openLabel="SUBSCRIBE"
              modalHeader='Perfectly Imperfect'
              modalBody='SUBSCRIBE HERE!'
            />
          </div>
        </div>
        < hr/>
          <div className="link-container">
          <Navbar color="light" light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">HOME</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/blogs">BLOG</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                 INSPIRATION
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    MUST SEES
                  </DropdownItem>
                  <DropdownItem>
                    BOOK SUGGESTIONS
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    PODCASTS
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/about">ABOUT</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
          </div>
          
      </div>
    )
  }
}

export default NavHeader;