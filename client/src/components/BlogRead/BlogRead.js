import React from 'react';
import axios from "axios";
import NavBar from "../NavBar";
import NavHeader from "../NavHeader";
import { Container } from 'reactstrap';
import './BlogRead.css';

import "./BlogRead.css";

class BlogRead extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        blog_id: this.props.location.pathname,
        data: [],
        blog: ''
    }
  }

  componentDidMount() {
    // console.log(this.props)
    axios.get(`/api/perfectlyimperfect/${this.state.blog_id}`)
      .then(res => {
        this.setState({data: res.data})
        this.formatBlog();
      })
      .catch(err => console.log(err));
  }



  formatBlog = () => {
    const format = Object.keys(this.state.data).map(key => this.state.data[key])
    this.setState({data: format});
    this.setState({ blog: this.state.data[6]});
    const text = this.state.blog;
    const textID = ' id="first_para"';
    var addedID = [text.slice(0, 2), textID, text.slice(2)].join('');
    let blog = document.querySelector('#blog');
    blog.innerHTML = addedID;
  }

  render() {
    return (
      <div>
          <NavBar />
          <NavHeader />
          <Container>
            <img id ="blog-image" src={this.state.data[7]} alt="blog-pic"/>
            <br />
            <h1 id="blog_title">{this.state.data[5]}</h1>
            <div id="blog"></div>
          </Container>
      </div>
    )
  }
}

export default BlogRead;