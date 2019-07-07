import axios from 'axios';
import Parser from 'html-react-parser';
import Moment from 'moment';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { GridLoader } from 'react-spinners';
import { Col, Container } from 'reactstrap';
import BlogCard from '../../components/BlogCard';
import NavHeader from '../../components/NavHeader';
import './Blogs.css';

class Blogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      loading: true,
    };
    this.renderCurrentBlog = this.renderCurrentBlog.bind(this);
  }

  componentDidMount() {
    axios.get(`/api/perfectlyimperfect/admin/posts`).then(res => {
      this.setState({
        blogs: res.data.reverse(),
        currentBlog: res.data[0],
        loading: false,
      });
    });
  }

  renderCurrentBlog = () => {
    const { currentBlog } = this.state;
    return (
      <div id="main-wrapper" key={currentBlog._id}>
        <img
          className="img-fluid"
          id="main-blog"
          src={currentBlog.img}
          alt="blog-pic"
        />
        <div id="summary">
          <h3 id="main-title">{currentBlog.title}</h3>
          <h6 id="main-date">
            {Moment(currentBlog.published).format('MMMM Do, YYYY')}
          </h6>
          {Parser([currentBlog.body.slice(0, 500), '....'].join(''))}
          <Link
            to={{ pathname: `/blog/${currentBlog._id}` }}
            className="btn btn-primary"
            id="main-blog-read"
          >
            READ MORE
          </Link>
        </div>
      </div>
    );
  };

  renderBlogCards = () =>
    this.state.blogs.slice(1).map(blog => (
      <Col xs={12} sm={12} md={4} lg={4} xl={4}>
        <BlogCard
          key={blog._id}
          src={blog.img}
          blog_title={blog.title}
          blog_date={Moment(blog.published).format('MMMM Do, YYYY')}
          blog_text={Parser([blog.body.slice(0, 35), '....'].join(''))}
          link={blog._id}
        />
      </Col>
    ));

  render() {
    const { blogs, currentBlog } = this.state;
    return (
      <Fragment>
        <NavHeader />
        <div id="ring-holder">
          <GridLoader
            loading={this.state.loading}
            size={25}
            marginTop={'10px'}
            color={'#2E5077'}
          />
        </div>
        {currentBlog && this.renderCurrentBlog()}
        <Container>
          <div className="blog-container">
            {blogs.length > 0 && this.renderBlogCards()}
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default Blogs;
