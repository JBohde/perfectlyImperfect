import React from "react";
import { Link } from "react-router-dom";
import './BlogCard.css';

const BlogCard = props => (
  <div className="card">
    <img className="card-img-top" src={props.src} style={{height: 12+ 'rem'}} alt="Card cap" />
    <div className="card-body">
      <h6 className="card-title">{props.blog_title}</h6>
      <h6>{props.blog_date}</h6>
      {props.blog_text}
      <Link to={`/blog/${props.link}`} className="btn btn-primary" id="main-blog-read">READ MORE</Link>
    </div>
    
  </div>
);

export default BlogCard;