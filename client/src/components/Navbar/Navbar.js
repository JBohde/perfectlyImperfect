import React from 'react';
import {Navbar} from 'reactstrap';
import './NavBar.css';


const NavBar = () => {

  return (
        <Navbar className="justify-content-end"><h6 id="follow">FOLLOW</h6>
          <a href="https://www.facebook.com/perfectlyimperfectblogpage/" target="_blank" rel="noopener noreferrer"><img src="./if_3_939757.png" className="social-img-nav" alt="fb-logo"/></a>
          <a href="https://www.instagram.com/perf_imperf2017/" target="_blank" rel="noopener noreferrer"><img src="./if_5_939756.png" className="social-img-nav" alt="insta-logo"/></a>
		      <a href="https://twitter.com/perf_imperf2017" target="_blank" rel="noopener noreferrer"><img src="./if_4_939755.png" className="social-img-nav" alt="twitter-logo"/></a>
        </Navbar>
  );
}

export default NavBar;