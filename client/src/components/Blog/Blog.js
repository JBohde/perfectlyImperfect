import React from "react";
import NavHeader from "../NavHeader";
import "./Blog.css";
// import BlogCard from "../BlogCard";

class Blog extends React.Component {

    state = {
        user_id: this.props.match.params.id,
        first_name: "",
        last_name: "",
        password: "",
    }

    render() {
        return (
            <div>
                <NavHeader />
                <div className="container">
                    <h1>THIS IS THE BLOG PAGE</h1>
                </div>
                {/* <BlogCard
                  src={blog.blog_img}
                  blog_title={blog.blog_title}
                  blog_text={blog.blog_text}
                /> */}
            </div>
        ) 
    }
}

export default Blog;