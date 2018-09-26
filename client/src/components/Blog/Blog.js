import React from "react";
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
        }
    }

    componentDidMount () {
        axios.get(`/api/perfectlyimperfect/admin/posts`)
        .then(res => {
            this.setState(res.data);
            console.log(this.state);
        })
    }

    render() {
        return (
            <div>
                <NavBar />
              <NavHeader />
              <Row>
                <Col sm={12} md={8} lg={8} id="main-wrapper">
                  <div ><img className="img-fluid" id="main-blog" src='https://images.pexels.com/photos/789382/pexels-photo-789382.jpeg?cs=srgb&dl=blur-close-up-daylight-789382.jpg&fm=jpg' alt="blog-pic"></img></div>
                </Col>
                <Col sm={12} md={4} lg={4} id="summary-wrapper">
                <h3>MAIN ARTICLE</h3>
                <p>Lorem ipsum dolor amet actually fanny pack sustainable listicle freegan.Asymmetrical pork belly selvage, twee freegan sriracha pour - over.Squid pitchfork mustache vegan kombucha.
                </p> 
                    <ButtonToolbar>
                        <Button outline color="primary" id="main-blog-read" size="lg">
                            READ MORE
                        </Button>
                    </ButtonToolbar>
                </Col>
                </Row>
                <Row>
                <Container>
                <div className="blog-container">
                <Col xs={12} sm={12} md={3} lg={3}>
                <BlogCard
                  src="https://images.pexels.com/photos/1440650/pexels-photo-1440650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  blog_title="BLOG ONE TITLE"
                  blog_text="Lorem ipsum dolor amet actually fanny pack sustainable listicle freegan....."
                />
                </Col>
                <Col xs={12} sm={12} md={3} lg={3}>
                <BlogCard
                  src="https://images.pexels.com/photos/1441508/pexels-photo-1441508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  blog_title="BLOG TWO TITLE"
                  blog_text="Lorem ipsum dolor amet actually fanny pack sustainable listicle freegan....."
                />
                </Col>
                <Col xs={12} sm={12} md={3} lg={3}>
                <BlogCard
                  src="https://images.pexels.com/photos/1078565/pexels-photo-1078565.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  blog_title="BLOG THREE TITLE"
                  blog_text="Lorem ipsum dolor amet actually fanny pack sustainable listicle freegan....."
                />
                </Col>
                <Col xs={12} sm={12} md={3} lg={3}>
                <BlogCard
                  src="https://images.pexels.com/photos/808910/pexels-photo-808910.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  blog_title="BLOG FOUR TITLE"
                  blog_text="Lorem ipsum dolor amet actually fanny pack sustainable listicle freegan....."
                />
                </Col>
                </div>
                </Container>
                </Row>
            </div>
        ) 
    }
}

export default Blog;