import React from 'react';
import './FileUploader.css';
class Uploader extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          file: 'http://placehold.it/350x350'
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
          <div className="placeholder">
            <input type="file" onChange={this.handleChange}/>
            <img className='responsive' src={this.state.file} alt='selected_file'/>
          </div>
        );
      }
    
}


export default Uploader;