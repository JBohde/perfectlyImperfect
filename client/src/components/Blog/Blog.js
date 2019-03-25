import React from 'react';
import axios from "axios";
import NavBar from "../Navbar";
import NavHeader from "../NavHeader";
import { Container } from 'reactstrap';
import {
  FacebookShareButton,
  GooglePlusShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  GooglePlusIcon,

} from 'react-share';
import Moment from "moment";
import Parser from 'html-react-parser';
import { GridLoader } from 'react-spinners';
import './Blog.css';

class Blog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        blog_id: this.props.match.params.id,
        data: [],
        blog: {
          _id: '',
          title: '',
          body: '',
          quote: '',
          img: '',
          published: '',
        },
        loading: true
    }
  }

  componentDidMount() {
    axios.get(`/api/perfectlyimperfect/blog/${this.state.blog_id}`)
      .then(res => {
        const formattedData = Object.keys(res).map(key => res[key])
        this.setState({ data: res, blog: formattedData[0] })
      })
      .then(() => this.insertQuote())
      .catch(err => console.log(err));
  }


  insertQuote = () => {
    const { blog: { quote } } = this.state;
    const quoteDiv = document.createElement('div');
    quoteDiv.innerHTML = `<hr class='quote-hr'><div class='quotes'>"${quote}"</div><hr class='quote-hr'>`;

    const blogDiv = document.querySelector('#blog')
    blogDiv.childNodes[Math.floor(blogDiv.childElementCount/2)].prepend(quoteDiv);

    document.querySelector('#blog-container').style.display = 'block';
    this.setState({ loading : false })
  }



  render() {
    const { blog: { _id, body, title, img, published, } } = this.state;
    return (
      <>
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
            <img id ="blog-image" src={img} alt="blog-pic"/>
              <h1 id="blog_title">{title}</h1>
              <h6 id="blog-date">{ Moment(published).format('MMMM Do, YYYY') }</h6>
                    <audio controls>
                <source
                  type="audio/mpeg"
                  src="https://perfectly-imperfect.herokuapp.com/Black_Panther_Theme.mp3"
                />
              </audio>
              <div id="blog">{Parser([body.slice(0, 2), ' id="initial-paragraph"', body.slice(2)].join(''))}</div>
              <div className='social-share'>
                <FacebookShareButton
                  windowWidth={500}
                  windowHeight={400}
                  children=''
                  image={img}
                  quote={title}
                  url={`https://perfectly-imperfect.herokuapp.com/blog/${_id}`}
                >
                  <FacebookIcon size={32} round={true}/>
                </FacebookShareButton>
                <GooglePlusShareButton
                  children=''
                  url={`https://perfectly-imperfect.herokuapp.com/blog/${_id}`}
                >
                  <GooglePlusIcon size={32} round={true}/>
                </GooglePlusShareButton>
                <TwitterShareButton
                  children=''
                  url={`https://perfectly-imperfect.herokuapp.com/blog/${_id}`}
                >
                  <TwitterIcon size={32} round={true}/>
                </TwitterShareButton>
              </div>
          </Container>
      </>
    )
  }
}

export default Blog;