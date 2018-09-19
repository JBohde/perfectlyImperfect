import React from 'react';
import './FileUploader.css';

class Uploader extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          file: 'http://placehold.it/350x250'
        }
        this.handleChange = this.handleChange.bind(this)
      }
      handleChange(event) {
        this.setState({
          file: URL.createObjectURL(event.target.files[0])
        })
      }
      render() {
        return (
          <div>
            <div className="placeholder">
              <img className='responsive' src={this.state.file} alt='selected_file'/>
              <input accept="image/*" onChange={this.handleChange} id="icon-button-file" type="file" />
              <label htmlFor="icon-button-file">
                <i class="fas fa-camera-retro"></i>
              </label>
            </div>
          </div>
        );
      }
    
}



export default Uploader;
