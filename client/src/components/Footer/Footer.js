import React from "react";
import {Navbar} from 'reactstrap';

import "./Footer.css";

const Footer = () => (
    <Navbar fixed="sticky" className="footer">
      <div>
        <div className="footer-social">
        <a href="https://www.facebook.com/perfectlyimperfectblogpage/" target="_blank" rel="noopener noreferrer" className="footer-link"><img src="../assets/images/facebook.png" className="footer-img" alt="fb-logo"/></a>
        <a href="https://www.instagram.com/perf_imperf2017/" target="_blank" rel="noopener noreferrer" className="footer-link"><img src="../assets/images/instagram.png" className="footer-img" alt="insta-logo"/></a>
		    <a href="https://twitter.com/perf_imperf2017" target="_blank" rel="noopener noreferrer" className="footer-link"><img src="../assets/images/twitter.png" className="footer-img" alt="twitter-logo"/></a>
        </div>
        <h6 id="copyright">&#169; 2018 perfectly imperfect</h6>
      </div>
    </Navbar>
)

export default Footer;