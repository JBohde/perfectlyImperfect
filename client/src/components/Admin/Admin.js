import React from "react";
import axios from "axios";
import "./Admin.css";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

// import Uploader from "../FileUploader";
// import Button from "../Button";
import NavBar from "../Navbar";


class Admin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: '',
            blog_title: '',
            blog_body: '',
            blog_quote: '',
            blog_image: 'http://placehold.it/350x250',
            image_name: '',
            blog_audio: '',
            audio_name: '',
            blog_video: ''
        }
        this.handleBodyChange = this.handleBodyChange.bind(this)
        this.handleImgChange = this.handleImgChange.bind(this)
        this.handleVideoChange = this.handleVideoChange.bind(this)
    }
    componentDidMount () {
        axios.get(`/api/perfectlyimperfect/admin/posts`)
        .then(res => {
            this.setState({data: res.data});
            console.log(res.data);
        })
    }

    handleTitleChange = event => {
    // Destructure the name and value properties off of event.target
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state.blog_title)
    }

    handleBodyChange = value => {
        this.setState({
            blog_body: value
        })
        console.log(this.state.blog_body);
    }

    handleQuoteChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state.blog_quote);
      }

    handleImgChange = event => {
        console.log(event.target.files);
        let files = event.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        this.setState({ image_name: files[0].name })
        reader.onload = event => {
            this.setState({
                blog_image: event.target.result
            })
            console.log('img data ', event.target.result);
        }
      }

    handleAudioChange = event => {
        console.log(event.target.files);
        let files = event.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        this.setState({ audio_name: files[0].name })
        reader.onload = event => {
            this.setState({
                blog_audio: event.target.result
            })
            console.log('audio data ', event.target.result);
        }
    }

    handleVideoChange = event => {
        this.setState({
          video: URL.createObjectURL(event.target.files[0])
        })
      }

    submitBlog = (e) => {
        const blogObj = { title: this.state.blog_title, body: this.state.blog_body, quote: this.state.blog_quote, img: this.state.blog_image };
        console.log(blogObj);
        axios.post(`/api/perfectlyimperfect/admin/posts`, blogObj)
            .then(res => { this.setState({ blog_title: "", blog_body: "", blog_quote: "", blog_image: "http://placehold.it/350x250", image_name: "" }); })
            .then(() => {
                axios.get(`/api/perfectlyimperfect/admin/posts`)
                  .then(res => {
                      this.setState(res.data);
                      console.log(this.state);
                  })
            })
      .catch(err => console.log(err));
    }


    render() {
        return (
            <div>
                <NavBar />
                <Row>
                    <Col xs={12} md={1} lg={1}></Col>
                    <Col xs={12} md={7} lg={7}>
                        <div className="editor-wrapper">
                            <Form>
		                      <FormGroup>
		                        <Label for="blog_title"><h5>Title</h5></Label>
                                <Input
                                  type="text"
                                  name="blog_title"
                                  value={this.state.blog_title}
                                  id="titleInput"
                                  onChange={this.handleTitleChange}
                                  placeholder="Enter title here"
                                />
                                <Label for="blog_quote"><h5>SUMMARY QUOTE</h5></Label>
                                <Input
                                  type="text"
                                  name="blog_quote"
                                  value={this.state.blog_quote}
                                  id="quoteInput"
                                  onChange={this.handleQuoteChange}
                                  placeholder="Enter quote here"
                                />
		                      </FormGroup>
	                        </Form>
                            <ReactQuill
                              theme="snow"
                              value={this.state.blog_body}
                              onChange={this.handleBodyChange}
                            />

                        </div>
                    </Col>
                    <Col xs={12} md={4} lg={4}>
                        <div className='uploader-wrapper'>
                            <div id='placeholder'>
                                <img className='img-fluid' src={this.state.blog_image} alt='selected_file'/>
                            </div>

                                <Input type="file" name='file' accept="image/*" onChange={this.handleImgChange} id="icon-button-file" />
                                <Label htmlFor="icon-button-file">
                                    <i className="fas fa-camera-retro fa-2x"></i>
                                </Label>
                                <Label>{this.state.image_name}</Label>
                            <div>
                            <Input type="file" name='audio-file' accept="audio/*" onChange={this.handleAudioChange} id="icon-button-file-audio" />
                                <Label htmlFor="icon-button-file-audio">
                                <i className="fas fa-microphone-alt fa-2x"></i>
                                </Label>
                                <Label>{this.state.audio_name}</Label>
                            </div>

                                <Input type="file" name='video-file' accept="video/*" onChange={this.handleVideoChange} id="icon-button-file-video" />
                                <Label htmlFor="icon-button-file-video">
                                    <i className="fas fa-video fa-2x"></i>
                                </Label>
                                <Label>{this.state.video_name}</Label>
                        </div>
                        <Button
                          id='submit-blog'
                          color="success"
                          value="Submit"
                          onClick={this.submitBlog.bind(this)}
                        >SUBMIT BLOG
                        </Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Admin;