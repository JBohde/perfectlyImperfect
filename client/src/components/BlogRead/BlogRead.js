import React from 'react';
import axios from "axios";
import NavBar from "../NavBar";
import NavHeader from "../NavHeader";
import { Container } from 'reactstrap';


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
    console.log(this.props)
    console.log(this.state.blog_id)
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
    let blog = document.querySelector('#blog')
    blog.innerHTML = this.state.blog
  }

  render() {
    return (
      <div>
          <NavBar />
          <NavHeader />
          <Container>
            <h1>{this.state.data[5]}</h1>
            <div id="blog"></div>
          </Container>
      </div>
    )
  }
}

export default BlogRead;