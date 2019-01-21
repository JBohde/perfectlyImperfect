import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Parser from 'html-react-parser';
import NavBar from "../Navbar";
import NavHeader from "../NavHeader";
import { Col, Container } from 'reactstrap';
import BlogCard from "../BlogCard";
import Moment from "moment";
import { GridLoader } from 'react-spinners';
import "./Blogs.css";

class Blogs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            main: [],
            main_text: '',
            blogs: [],
            showBlogs: false,
            loading: true
        }
    }

    componentDidMount () {
        axios.get(`/api/perfectlyimperfect/admin/posts`)
        .then(res => {
            this.setState({data: res.data, main: res.data[0]});
            this.setState({ loading: false })
        })
    }

    render() {
        const allBlogs = this.state.data.map(blog => (
                <div id="main-wrapper" key={blog._id}>
                    <img className="img-fluid" id="main-blog" src={blog.img} alt="blog-pic"/>
                    <div id="summary">
                        <h3 id="main-title">{blog.title}</h3>
                        <h6 id="main-date">{Moment(blog.published).format('MMMM Do, YYYY')}</h6>
                        {Parser([blog.body.slice(0, 500), ".......", blog.body.slice(500, 500)].join(''))}
                        <Link to={{ pathname: `/blog/${blog._id}`, params: { data: this.state } }} className="btn btn-primary" id="main-blog-read">READ MORE</Link>
                    </div>
                </div>
        ))

        const blogCard = this.state.data.map(blog => (
              <BlogCard
                key={blog._id}
                src={blog.img}
                blog_title={blog.title}
                blog_date={Moment(blog.published).format('MMMM Do, YYYY')}
                blog_text={Parser([blog.body.slice(0, 55), "...", blog.body.slice(40, 40)].join(''))}
                link={blog._id}
              />
        ))
        return (
            <Fragment>
              <NavBar />
              <NavHeader />
                <div id='ring-holder'>
                  <GridLoader
                    loading={this.state.loading}
                    size={25}
                    marginTop={'10px'}
                    color={'#2E5077'}
                  />
                </div>
                    {allBlogs.slice(allBlogs.length - 1)}
                {/* <Row> */}
                <Container>
                <div className="blog-container">
                <Col xs={12} sm={12} md={4} lg={4} xl={4} >
                    {blogCard.reverse().slice(1,2)}
                </Col>
                <Col xs={12} sm={12} md={4} lg={4} xl={4} >
                {blogCard.slice(2,3)}
                {/* <Media>
                    <Media left bottom href="#">
                    <Media object src="http://placehold.it/64x64" alt="Generic placeholder image" />
                    </Media>
                    <Media body>
                    <Media heading>
                        About Me
                    </Media>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                    </Media>
                </Media> */}
                </Col>
                <Col xs={12} sm={12} md={4} lg={4} xl={4} >
                    {blogCard.slice(3,4)}
                </Col>
                </div>
                </Container>
                {/* </Row> */}
            </Fragment>
        )
    }
}

export default Blogs;