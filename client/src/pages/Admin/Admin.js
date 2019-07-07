import axios from 'axios';
import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap';
import NavBar from '../../components/Navbar';
import './Admin.css';

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      title: '',
      body: '',
      quote: '',
      image: '',
      imageName: '',
      audio: '',
      audioName: '',
      video: '',
    };
  }
  componentDidMount() {
    axios.get(`/api/perfectlyimperfect/admin/posts`).then(res => {
      this.setState({ blogs: res.data});
    });
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleEditorChange = value => {
    this.setState({ body: value });
  };

  handleImageChange = event => {
    const files = event.target.files;
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    this.setState({ imageName: files[0].name });
    reader.onload = event => {
      this.setState({ image: event.target.result });
    };
  };

  handleAudioChange = event => {
    let files = event.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    this.setState({ audioName: files[0].name });
    reader.onload = event => {
      this.setState({ audio: event.target.result });
    };
  };

  handleVideoChange = event => {
    this.setState({
      video: URL.createObjectURL(event.target.files[0]),
    });
  };

  submitBlog = e => {
    const { title, body, quote, image } = this.state;
    const blogObj = {
      title,
      body,
      quote,
      image,
    };
    axios
      .post(`/api/perfectlyimperfect/admin/posts`, blogObj)
      .then(() => {
        this.setState({
          title: '',
          body: '',
          quote: '',
          image: null,
          imageName: '',
        });
      })
      .then(() => {
        axios.get(`/api/perfectlyimperfect/admin/posts`).then(res => {
          this.setState({ blogs: res.data });
        });
      })
      .catch(err => console.log(err));
  };

  render() {
       const { title, body, quote, image } = this.state
    return (
      <>
        <NavBar />
        <div className='admin-row'>
          <Col xs={12} md={8} lg={8}>
            <div className="editor-wrapper">
              <Form>
                <FormGroup>
                  <Label for="title">
                    <h5>Title</h5>
                  </Label>
                  <Input
                    type="text"
                    name="title"
                    value={title}
                    id="titleInput"
                    onChange={this.handleChange}
                    placeholder="Enter title here"
                  />
                  <Label for="quote">
                    <h5>SUMMARY QUOTE</h5>
                  </Label>
                  <Input
                    type="text"
                    name="quote"
                    value={quote}
                    id="quoteInput"
                    onChange={this.handleChange}
                    placeholder="Enter quote here"
                  />
                </FormGroup>
              </Form>
              <ReactQuill
                theme="snow"
                value={body}
                onChange={this.handleEditorChange}
              />
            </div>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <div className="uploader-wrapper">
                <img
                  className="img-fluid"
                  src={image || 'https://placehold.it/350x250'}
                  alt="selected_file"
                />
            <div id="input-wrapper">
              <Input
                type="file"
                name="image"
                accept="image/*"
                onChange={this.handleImageChange}
                id="icon-button-file"
              />
              <Label htmlFor="icon-button-file">
                <i className="fas fa-camera-retro fa-2x" />
              </Label>
              <Label>{this.state.imageName}</Label>
                <Input
                  type="file"
                  name="audio"
                  accept="audio/*"
                  onChange={this.handleAudioChange}
                  id="icon-button-file-audio"
                />
                <Label htmlFor="icon-button-file-audio">
                  <i className="fas fa-microphone-alt fa-2x" />
                </Label>
                <Label>{this.state.audioName}</Label>

              <Input
                type="file"
                name="video"
                accept="video/*"
                onChange={this.handleVideoChange}
                id="icon-button-file-video"
              />
              <Label htmlFor="icon-button-file-video">
                <i className="fas fa-video fa-2x" />
              </Label>
              <Label>{this.state.videoName}</Label>
            </div>
            <Button
              id="blog-submit"
              value="Submit"
              onClick={this.submitBlog.bind(this)}
            >
              SUBMIT BLOG
            </Button>
            </div>
          </Col>
        </div>
      </>
    );
  }
}

export default Admin;
