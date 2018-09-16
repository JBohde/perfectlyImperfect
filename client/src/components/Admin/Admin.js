import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Admin.css";
import MyInput from "../Input";
import MyEditor from "../MyEditor";
import Uploader from "../FileUploader";
import Button from "../Button";
import BlogCard from "../BlogCard";
// import 'draft-js/dist/Draft.css';


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
                <div className="editor-wrapper">
                <form>
                    <MyInput
                      name="blog_title"
                      value={this.state.blog_title}
                      onChange={this.onChange}
                      placeholder="Blog Title"
                    />
                    <br />
                </form>
                <MyEditor />
                <Button
                    type="success"
                    value="Submit"
                    onClick={this.submitBlog.bind(this)}
                    label="SUBMIT"
                >
                </Button>
                </div>
                <Uploader />
               <BlogCard/>
            </div>
        )
    }
}

export default Admin;