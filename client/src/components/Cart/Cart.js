import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

class Cart extends React.Component {
    state = {

    }

    render() {
        return (
            <div className="container">
                <h1>THIS IS THE SHOPPING CART</h1>
                <Link to="/">HOME</Link>
                <Link to="/blog">BLOG</Link>
                <Link to="/shop/:id">SHOP</Link>
            </div>
        )
    }
}

export default Cart;