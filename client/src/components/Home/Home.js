import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

class Home extends React.Component {

    state = {

    }

    render() {
        return (
            <div className="container">
                <h1>THIS IS THE HOME PAGE</h1>
                <Link to="/blog">BLOG</Link>
                <Link to="/shop/:id">SHOP</Link>
                <Link to="/cart/:id">CART</Link>
            </div>
        )
    }
}

export default Home;