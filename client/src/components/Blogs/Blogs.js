import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Parser from 'html-react-parser';
import NavBar from "../NavBar";
import NavHeader from "../NavHeader";
import { Row, Col, Container } from 'reactstrap';
import BlogCard from "../BlogCard";
import "./Blogs.css";

class Blogs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            main: [],
            main_text: '',
            blogs: [],
            showBlogs: false
        }
    }

    componentDidMount () {
        axios.get(`/api/perfectlyimperfect/admin/posts`)
        .then(res => {
            this.setState({data: res.data, main: res.data[0]});
            console.log(this.state.data);
            // console.log(this.state.main);
            // this.formatBlog();
            
        })
    }
 
    // formatBlog = () => {
    //     const format = Object.keys(this.state.main).map(key => this.state.main[key])
    //     this.setState({main: format});
    //     console.log(this.state.main);
    //     this.setState({ main_text: this.state.main[6]});
    //     document.querySelector('#main-text').innerHTML = this.state.main_text.substring(0, 300);
    //   }

    render() {
        const allBlogs = this.state.data.map(blog => (
            <Row key={blog._id}>
                <div id="main-wrapper">
                    <img className="img-fluid" id="main-blog" src={blog.img} alt="blog-pic"/>
                    <div id="summary">
                        <h3>{blog.title}</h3>
                        <h5>{blog._id}</h5>
                        {Parser(blog.body.substring(0, 350))}
                        {/* <Link to={`/blog/${blog._id}`} className="btn btn-primary" id="main-blog-read">READ MORE</Link> */}
                        <Link to={{ pathname: `/blog/${blog._id}`, params: { data: this.state } }} className="btn btn-primary" id="main-blog-read">READ MORE</Link>
                    </div>
                </div>
             </Row>
        ))

        const blogCard = this.state.data.map(blog => (
              <BlogCard
                key={blog._id}
                src={blog.img}
                blog_title={blog.title}
                blog_text={Parser(blog.body.substring(0, 200))}
                // href={`/blog/${blog._id}`}
                link={blog._id}
              />
        ))
        return (
            <div>
              <NavBar />
              <NavHeader />
                {/* {this.state.showBlogs ? this.renderMain() : null}
                <Row>
                    <div id="main-wrapper">
                        <img className="img-fluid" id="main-blog" src={this.state.main[7]} alt="blog-pic"/>
                        <div id="summary">
                            <h3>{this.state.main[5]}</h3>
                            <p className="card-text" id="main-text"></p> 
                        <Link to={`/blog/${this.state.main[4]}`} className="btn btn-primary" id="main-blog-read">READ MORE</Link>
                    </div>
                </div>
                </Row> */}
                    {allBlogs.slice(allBlogs.length - 1)}
                <Row>
                <Container>
                <div className="blog-container">
                <Col xs={12} sm={12} md={3} lg={3} xl={3} >
                    {blogCard.reverse().slice(1,2)}
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} >

                </Col>
                <Col xs={12} sm={12} md={3} lg={3} xl={3} >
                    {blogCard.slice(2,3)}
                </Col>
                </div>
                </Container>
                </Row>
            </div>
        ) 
    }
}

export default Blogs;