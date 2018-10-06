import React from 'react';
import axios from "axios";
import NavBar from "../NavBar";
import NavHeader from "../NavHeader";
import { Container } from 'reactstrap';
import ReactAudioPlayer from 'react-audio-player';
import {
  FacebookShareButton,
  GooglePlusShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  GooglePlusIcon,

} from 'react-share';
import Moment from "moment";
import './BlogRead.css';

class BlogRead extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        blog_id: this.props.match.url,
        data: [],
        blog: ''
    }
  }

  componentDidMount() {
    console.log(this.props);
    console.log(this.state.blog_id);
    axios.get(`/api/perfectlyimperfect/${this.state.blog_id}`)
      .then(res => {
        console.log(res);
        this.setState({data: res.data})
        console.log(this.state.data);
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
            <h6 id="blog-date">{Moment(this.state.data[9]).format('MMMM Do, YYYY')}</h6>
            <div className='social-share'>
            <FacebookShareButton children='' url={`http://perfectlyimperfect.herokuapp.com/blog/${this.state.blog_id}`}><FacebookIcon size={32} round={true}/></FacebookShareButton>
            <GooglePlusShareButton url={`http://perfectlyimperfect.herokuapp.com/blog/${this.state.blog_id}`}><GooglePlusIcon size={32} round={true}/></GooglePlusShareButton>
            <TwitterShareButton url={`http://perfectlyimperfect.herokuapp.com/blog/${this.state.blog_id}`}><TwitterIcon size={32} round={true}/></TwitterShareButton>
            </div>
            <ReactAudioPlayer
              src="my_audio_file.ogg"
              autoPlay
              controls
            />
            <div id="blog"></div>
          </Container>
      </div>
    )
  }
}

export default BlogRead;