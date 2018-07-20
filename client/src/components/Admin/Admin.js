import React from "react";
import { Link } from "react-router-dom";
import "./Admin.css";
import Input from "../Input/Input";
import Button from "../Button/Button";

class Admin extends React.Component {

    state = {

    }

    onChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        {/* str.replace(new RegExp('\r?\n','g'), '<br />'); */}
        let blog = document.getElementById('blog').value.replace(/\n/g, "<br />");
        console.log(blog);
    }



    render() {
        return (
            <div className="container">
                <h1>THIS IS THE ADMIN PAGE</h1>
                <Link to="/">HOME</Link>
                <Link to="/shop/:id">SHOP</Link>
                <Link to="/cart/:id">CART</Link>
                <div>
                <form
                    // onSubmit={onSubmit}
                    // id={props.blog_id}
                >
                    <Input
                    //   name="blog_text"
                    //   value={props.blog_text}
                    //   onChange={props.onChange}
                      placeholder="Write a blog..."
                    />
                    <br />
                </form>
                <Button
                    type="success"
                >SUBMIT</Button>
                </div>
                
            </div>
        )
    }
}

export default Admin;