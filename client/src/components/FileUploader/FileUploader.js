import React from 'react';
import './FileUploader.css';

class Uploader extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          image: 'http://placehold.it/350x250',
          video: ''
        }
        this.changeImage = this.changeImage.bind(this)
        this.changeVideo = this.changeVideo.bind(this)
      }

      changeImage(event) {
        this.setState({
          image: URL.createObjectURL(event.target.files[0])
        })
      }

      changeVideo(event) {
        this.setState({
          video: URL.createObjectURL(event.target.files[0])
        })
      }
      render() {
        return (
          <div>
            <div>
              <img className='img-fluid' src={this.state.image} alt='selected_file'/>
            </div>
              <span>
                <input accept="image/*" onChange={this.changeImage} id="icon-button-file" type="file" />
                <label htmlFor="icon-button-file">
                  <i className="fas fa-camera-retro fa-2x"></i>
                </label>
                <input accept="video/*" onChange={this.changeVideo} id="icon-button-file" type="file" />
                <label htmlFor="icon-button-file">
                  <i class="fas fa-video fa-2x"></i>
                </label>
              </span>
          </div>
        );
      }
    
}



export default Uploader;
