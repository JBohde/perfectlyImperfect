import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Admin.css";
import Input from "../Input";
import Button from "../Button";
import BlogCard from "../BlogCard";

class Admin extends React.Component {

    state = {
        data: "",
        author: "Ben Gear",
        blog_title: "",
        blog_text: ""
    }

    componentDidMount () {
        axios.get(`/api/perfectlyimperfect/admin/posts`)
        .then(res => {
            this.setState(res.data);
            console.log(res.data);
        })
    }

    onChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
        // console.log(this.state);
    }

    submitBlog = (e) => {
        const blogObj = { author: this.state.author, title: this.state.blog_title, body: this.state.blog_text.replace(/\n/g, "<br />") };
        console.log(blogObj);
        axios.post(`/api/perfectlyimperfect/admin/posts`, blogObj)
            .then(res => {
                this.setState({ blog_title: "", blog_text: "" });
            })
            .then(() => {
                axios.get(`/api/perfectlyimperfect/admin/posts`)
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
                    value="Submit"
                    onClick={this.submitBlog.bind(this)}
                    label="SUBMIT"
                >
                </Button>
                </div>
               <BlogCard
                title="HERE IT IS!!!"
                label="ACTION 1"
               ></BlogCard>
            </div>
        )
    }
}

export default Admin;