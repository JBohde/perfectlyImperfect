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
import { GridLoader } from 'react-spinners';
import './BlogRead.css';

class BlogRead extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        blog_id: this.props.match.params.id,
        data: [],
        blog_image: '',
        blog_title: '',
        blog_date: '',
        blog: '',
        loading: true
    }
  }

  componentDidMount() {
    axios.get(`/api/perfectlyimperfect/blog/${this.state.blog_id}`)
      .then(res => {
        this.setState({data: res.data})
        this.formatBlog();
      })
      .catch(err => console.log(err));
  }



  formatBlog = () => {
    const format = Object.keys(this.state.data).map(key => this.state.data[key])
    this.setState({data: format});
    this.setState({ 
      blog_image: this.state.data[7], 
      blog_title: this.state.data[5], 
      blog_date: this.state.data[8], 
      blog: this.state.data[6]
    });
    const text = this.state.blog;
    const textID = ' id="first_para"';
    const addedID = [text.slice(0, 2), textID, text.slice(2)].join('');
    document.querySelector('#blog').innerHTML = addedID;
    document.querySelector('#blog-container').style.display = 'block';
    this.setState({loading : false})
  }

  render() {
    return (
      <div>
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
          <Container id="blog-container">
            <img id ="blog-image" src={this.state.blog_image} alt="blog-pic"/>
            <br />
            <h1 id="blog_title">{this.state.blog_title}</h1>
            <h6 id="blog-date">{Moment(this.state.blog_date).format('MMMM Do, YYYY')}</h6>
            <div className='social-share'>
            <FacebookShareButton children='' url={`https://perfectly-imperfect.herokuapp.com/blog/${this.state.blog_id}`}><FacebookIcon size={32} round={true}/></FacebookShareButton>
            <GooglePlusShareButton children='' url={`https://perfectly-imperfect.herokuapp.com/blog/${this.state.blog_id}`}><GooglePlusIcon size={32} round={true}/></GooglePlusShareButton>
            <TwitterShareButton children='' url={`https://perfectly-imperfect.herokuapp.com/blog/${this.state.blog_id}`}><TwitterIcon size={32} round={true}/></TwitterShareButton>
            </div>
            <br/>
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