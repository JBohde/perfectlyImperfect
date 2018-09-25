import React from "react";
import {Navbar} from 'react-bootstrap';

import "./Footer.css";

const Footer = () => (
    <Navbar fixed="sticky" className="footer">
      <div>
        <a href="https://www.facebook.com/perfectlyimperfectblogpage/" target="_blank" rel="noopener noreferrer" className="footer-link"><img src="./if_facebook_313485.png" className="footer-img" alt="fb-logo"/></a>
        <a href="https://www.instagram.com/perf_imperf2017/" target="_blank" rel="noopener noreferrer" className="footer-link"><img src="./if_instagram_313477.png" className="footer-img" alt="insta-logo"/></a>
		<a href="https://twitter.com/perf_imperf2017" target="_blank" rel="noopener noreferrer" className="footer-link"><img src="./if_twitter_313466.png" className="footer-img" alt="twitter-logo"/></a>
      <h6>&#169; 2018 perfectly imperfect</h6>
      </div>
    </Navbar>
)

export default Footer;