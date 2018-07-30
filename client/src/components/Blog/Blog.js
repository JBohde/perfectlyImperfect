import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

class Blog extends React.Component {

    state = {
        user_id: this.props.match.params.id,
        first_name: "",
        last_name: "",
        password: "",
    }

    render() {
        return (
            <div className="container">
                <h1>THIS IS THE BLOG PAGE</h1>
                <Link to="/">HOME</Link>
                <Link to="/shop/:id">SHOP</Link>
                <Link to="/cart/:id">CART</Link>
            </div>
        )
    }
}

export default Blog;