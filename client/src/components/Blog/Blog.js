import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NavBar from "../NavBar";
import NavHeader from "../NavHeader";
import { Row, Col, Container, Button, ButtonToolbar } from 'reactstrap';
import BlogCard from "../BlogCard";
import "./Blog.css";

class Blog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user_id: this.props.match.params.id,
            data: []
        }
    }

    componentDidMount () {
        axios.get(`/api/perfectlyimperfect/admin/posts`)
        .then(res => {
            this.setState({data: res.data});
            console.log(this.state.data);
        })
    }

    render() {
        let newString;
        console.log(this.state.data)
        const allBlogs = this.state.data.map(blog => (
            newString = blog.body.replace(/<p.*?>(.*?)<\/p>|<em.*?>(.*?)<\/em>|<strong.*?>(.*?)<\/strong>|<a.*?>(.*?)<\/a>/g, '$1'),
            <Row key={blog._id}>
            <Col sm={12} md={8} lg={8} id="main-wrapper">
                <div><img className="img-fluid" id="main-blog" src={blog.img} alt="blog-pic"/></div>
            </Col>
            <Col sm={12} md={4} lg={4} id="summary-wrapper"  >
                <div id="summary">
                  <h3>{blog.title}</h3>
                  <p className="card-text">{`${newString.substring(0, 300)}....`} </p> 
                </div>
              <ButtonToolbar>
              <Link to={{ pathname: `/blog/${blog._id}` }}>
                  <Button outline color="primary" id="main-blog-read" size="lg" href={`/blog/${blog._id}`}>
                      READ MORE
                  </Button>
              </Link>
              </ButtonToolbar>
            </Col>
            </Row>
        ))

        const blogCard = this.state.data.map(blog => (
            
              <BlogCard
                key={blog._id}
                src={blog.img}
                blog_title={blog.title}
                blog_text={newString.substring(0, 100)}
                href={`/blog/${blog._id}`}
              />
            
        ))
        return (
            <div>
              <NavBar />
              <NavHeader />
                    {allBlogs.slice(allBlogs.length - 1)}
                <Row>
                <Container>
                <div className="blog-container">
                <Col xs={12} sm={12} md={6} lg={4} >
                    {blogCard.reverse().slice(1,2)}
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} >

                </Col>
                <Col xs={12} sm={12} md={6} lg={4} >
                    {blogCard.reverse().slice(2,3)}
                </Col>
                </div>
                </Container>
                </Row>
            </div>
        ) 
    }
}

export default Blog;