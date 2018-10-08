import React from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody
  } from 'reactstrap';
  import './Modal.css';
  
  class MyModal extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        dd1: false,
        modal1: false,
        name: '',
        email: ''
      };
      this.dropdownToggle = this.dropdownToggle.bind(this);
    }
    
    dropdownToggle() {
      this.setState({
        dd1: !this.state.dd1
      });
    }
    closeModal(tabId) {
      this.setState({
        [tabId]: false
      });
    }
    showModal(modal) {
      this.setState({
        [modal]: true
      });
      console.log(this.state);
    }
    handleChangeName = event => {
      console.log(this.state.name);
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
      
  }
    handleChangeEmail = event => {
      console.log(this.state.email);
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
      
  }

    handleSubcribe = event => {
      console.log(this.state.name);
      console.log(this.state.email);
    }
    
    render() {
      return (      
        <React.Fragment>
           <Modal isOpen={this.state.modal1} toggle={this.closeModal.bind(this, 'modal1')}>
             <ModalHeader toggle={this.closeModal.bind(this, 'modal1')}>
              {this.props.modalHeader}
             </ModalHeader>
             <ModalBody>
               {/* {this.props.modalBody} */}
               <label>Name:</label>
                <input type="text" name='name' value={this.state.name} onChange={this.handleChangeName} className="form-control" />
                <label>Email:</label>
                <input type="email" name='email' value={this.state.email} onChange={this.handleChangeEmail} className="form-control" />
               <div>
                 <br/>
                 <Button id="subscribe-btn" onClick={this.handleSubcribe}>
               Subscribe
               </Button>
               <Button id="close-btn" onClick={this.closeModal.bind(this, 'modal1')}>
               Cancel
               </Button>
               </div>
             </ModalBody>
          </Modal>
          <br/>
          <Button outline color="primary" id={this.props.id} onClick={this.showModal.bind(this, 'modal1')}>
            {this.props.openLabel}
          </Button>
        </React.Fragment>
      );
    }
  }
  
export default MyModal;
  
  