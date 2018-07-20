import React from "react";
import { Link } from "react-router-dom";
import "./Shop.css";

class Shop extends React.Component {
    
    state = {

    }

    render() {
        return (
            <div className="container">
                <h1>THIS IS THE SHOPPING PAGE</h1>
                <Link to="/">HOME</Link>
                <Link to="/blog">BLOG</Link>
                <Link to="/cart/:id">CART</Link>
            </div>
        )
    }
}

export default Shop;