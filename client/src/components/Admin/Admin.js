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
            blog_image: 'http://placehold.it/350x250',
            image_name: '',
            blog_audio: '',
            blog_video: ''
        }
        this.handleBodyChange = this.handleBodyChange.bind(this)
        this.handleImgChange = this.handleImgChange.bind(this)
        this.handleVideoChange = this.handleVideoChange.bind(this)
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

    // handleImgChange = event => {
    //     console.log(event);
    //     const { name, value } = event.target;
    //     this.setState({
    //         [name]: value
    //     });
    //     console.log(this.state.blog_image);
    //   }

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
        const blogObj = { title: this.state.blog_title, body: this.state.blog_body, img: this.state.blog_image };
        console.log(blogObj);
        axios.post(`/api/perfectlyimperfect/admin/posts`, blogObj)
            .then(res => { this.setState({ blog_title: "", blog_body: "", blog_image: "http://placehold.it/350x250", image_name: "" }); })
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
                {/* <h1>THIS IS THE ADMIN PAGE</h1> */}
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
                                <Label for="blog_image"><h5>Image</h5></Label>
                                <Input 
                                  type="text" 
                                  name="blog_image" 
                                  value={this.state.image_name} 
                                  id="imgInput" 
                                  onChange={this.handleImgChange} 
                                  placeholder="Enter image link here" 
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
                            <div>
                                <img className='img-fluid' src={this.state.blog_image} alt='selected_file'/>
                            </div>
                            <span>
                                <Input type="file" name='file' accept="image/*" onChange={this.handleImgChange} id="icon-button-file" />
                                <Label htmlFor="icon-button-file">
                                    <i className="fas fa-camera-retro fa-2x"></i>
                                </Label>
                                <Input type="file" name='file' accept="video/*" onChange={this.handleVideoChange} id="icon-button-file" />
                                <Label htmlFor="icon-button-file">
                                    <i className="fas fa-video fa-2x"></i>
                                </Label>
                            </span>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Admin;