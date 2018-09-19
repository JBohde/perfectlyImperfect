import React from "react";

const BlogCard = props => (
  <div className="card" style="width: 18rem;">
    <img className="card-img-top" src={props.src} alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">{props.blog_title}</h5>
      <p className="card-text">{props.blog_text}</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
);

export default BlogCard;