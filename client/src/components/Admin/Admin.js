import React from "react";
import axios from "axios";
import "./Admin.css";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'; 
// import Uploader from "../FileUploader";
// import Button from "../Button";
import NavBar from "../NavBar";


class Admin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: '',
            blog_title: '',
            blog_body: '',
            blog_img: 'http://placehold.it/350x250',
            blog_audio: '',
            blog_video: ''
        }
        this.handleBodyChange = this.handleBodyChange.bind(this)
        this.changeImage = this.changeImage.bind(this)
        this.changeVideo = this.changeVideo.bind(this)
    }
    componentDidMount () {
        axios.get(`/api/perfectlyimperfect/admin/posts`)
        .then(res => {
            this.setState(res.data);
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

    changeImage = event => {
        console.log(event);
        this.setState({
          blog_img: URL.createObjectURL(event.target.files[0])
        })
        console.log(this.state.blog_img);
      }

    handleAudioChange = audio => {
        this.setState({ 
            blog_audio: audio 
        })
        console.log(this.state.blog_audio);
    }

    changeVideo = event => {
        this.setState({
          video: URL.createObjectURL(event.target.files[0])
        })
      }

    submitBlog = (e) => {
        const blogObj = { title: this.state.blog_title, body: this.state.blog_body, img: this.state.blog_image };
        console.log(blogObj);
        axios.post(`/api/perfectlyimperfect/admin/posts`, blogObj)
            .then(res => { this.setState({ blog_title: "", blog_body: "", blog_img: "" }); })
            .then(() => {
                axios.get(`/api/perfectlyimperfect/admin/posts`)
                  .then(res => { this.setState(res.data); })
            })
      .catch(err => console.log(err));
    }


    render() {
        return (
            <div>
                <NavBar />
                <h1>THIS IS THE ADMIN PAGE</h1>
                <Row>
                    <Col xs={12} md={2} lg={2}></Col>
                    <Col xs={12} md={6} lg={6}>
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
		                      </FormGroup>
	                        </Form>
                            <ReactQuill
                              theme="snow" 
                              value={this.state.blog_body}
                              onChange={this.handleBodyChange}  
                            />
                            <Button
                              color="success"
                              value="Submit"
                              onClick={this.submitBlog.bind(this)}
                            >SUBMIT
                            </Button>
                        </div>
                    </Col>
                    <Col xs={12} md={4} lg={4}>
                        <div className='uploader-wrapper'>
                            {/* <Uploader /> */}
                            <div>
                                <img className='img-fluid' src={this.state.blog_img} alt='selected_file'/>
                         </div>
                        <span>
                            <input accept="image/*" onChange={this.changeImage} id="icon-button-file" type="file" />
                            <label htmlFor="icon-button-file">
                            <i className="fas fa-camera-retro fa-2x"></i>
                            </label>
                            <input accept="video/*" onChange={this.changeVideo} id="icon-button-file" type="file" />
                            <label htmlFor="icon-button-file">
                            <i className="fas fa-video fa-2x"></i>
                            </label>
                        </span>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Admin;