import React from "react";
import { Link } from "react-router-dom";
const cardStyle = {
  width: "100%",
  margin: "0 auto",
}

const BlogCard = props => (
  <div className="card" style={cardStyle}>
    <img className="card-img-top" src={props.src} style={{height: 12+ 'rem'}} alt="Card cap" />
    <div className="card-body">
      <h5 className="card-title">{props.blog_title}</h5>
      <h6>{props.blog_date}</h6>
      {props.blog_text}
      <Link to={`/blog/${props.link}`} className="btn btn-primary" id="main-blog-read">READ MORE</Link>
    </div>
    
  </div>
);

export default BlogCard;