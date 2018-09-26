import React from "react";

const cardStyle = {
  width: "100%",
  margin: "0 auto"
}

const BlogCard = props => (
  <div className="card" style={cardStyle}>
    <img className="card-img-top" src={props.src} style={{height: 12+ 'rem'}} alt="Card cap" />
    <div className="card-body">
      <h5 className="card-title">{props.blog_title}</h5>
      <p className="card-text">{props.blog_text}</p>
      <a href="" className="btn btn-primary">READ MORE</a>
    </div>
  </div>
);

export default BlogCard;