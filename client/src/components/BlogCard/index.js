import React from "react";
import { Button } from 'reactstrap';
const cardStyle = {
  width: "100%",
  margin: "0 auto",
}

const p = document.createElement('p')

const BlogCard = props => (
  <div className="card" style={cardStyle}>
    <img className="card-img-top" src={props.src} style={{height: 12+ 'rem'}} alt="Card cap" />
    <div className="card-body">
      <h5 className="card-title">{props.blog_title}</h5>
      <p className="card-text">{props.blog_text}....</p>
      {/* <p className='card-text'>{props.blog_text.toHTML(props.blog_text)}</p> */}
      <Button outline color="primary" className='card-button' size="lg" href={props.href}>READ MORE</Button>
    </div>
  </div>
);

export default BlogCard;