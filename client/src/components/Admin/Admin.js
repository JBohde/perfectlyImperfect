import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Admin.css";
import Input from "../Input";
import Button from "../Button";

class Admin extends React.Component {

    state = {
        blog_title: "",
        blog_text: ""
    }

    onChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
    }

    submitBlog = (e) => {
        const blogObj = { user_id: id, title: this.state.blog_title, body: this.state.blog_text.replace(/\n/g, "<br />") };
        console.log(blogObj);
        axios.post(`/api/perfectlyimperfect/user/blogs/${id}`, blogObj)
            .then(res => {
                this.setState({ blog_text: "" });
            })
            .then(() => {
                axios.get(`/api/perfectlyimperfect/user/${this.props.match.params.id}`)
                    .then(res => {
                        this.setState(res.data);
                    })
            })
      .catch(err => console.log(err));
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
                    // submitBlog={submitBlog}
                    // id={props.blog_id}
                >
                    <Input
                      name="blog_title"
                      value={this.state.blog_title}
                      onChange={this.onChange}
                      placeholder="Blog Title"
                    />
                    <Input
                      name="blog_text"
                      value={this.state.blog_text}
                      onChange={this.onChange}
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