import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Admin.css";
import MyInput from "../Input";
import MyEditor from "../MyEditor";
import Uploader from "../FileUploader";
import Button from "../Button";

// // import 'draft-js/dist/Draft.css';
// const styles = theme => ({
//     root: {
//       flexGrow: 1,
//     },
//     paper: {
//       height: 140,
//       width: 100,
//     },
//     control: {
//       padding: theme.spacing.unit * 2,
//     },
//   });

class Admin extends React.Component {

    state = {
        data: "",
        author: "Ben Gear",
        blog_title: "",
        blog_text: "",
        file: 'http://placehold.it/350x350'
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
            <div>
                <h1>THIS IS THE ADMIN PAGE</h1>
                <Link to="/">HOME</Link>
                <Link to="/blog">BLOG</Link>
                <Link to="/shop/:id">SHOP</Link>
                <Link to="/cart/:id">CART</Link>
                <div className="row">
                <div className="col-12 col-md-8 col-lg-8">
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
                </div>
                <div className="col-12 col-md-4 cold-lg-8">
                <div className='uploader-wrapper'>
                    <Uploader />
                </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Admin;