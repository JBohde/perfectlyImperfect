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
        modal1: false
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
    
    render() {
      return (      
        <div>
           <Modal isOpen={this.state.modal1} toggle={this.closeModal.bind(this, 'modal1')}>
             <ModalHeader toggle={this.closeModal.bind(this, 'modal1')}>
              {this.props.modalHeader}
             </ModalHeader>
             <ModalBody>
               {this.props.modalBody}
               <div>
               <Button id="close-btn" onClick={this.closeModal.bind(this, 'modal1')}>
               Close
               </Button>
               </div>
             </ModalBody>
          </Modal>
          <Button outline color="primary" id={this.props.id} onClick={this.showModal.bind(this, 'modal1')}>
            {this.props.openLabel}
          </Button>
        </div>
      );
    }
  }
  
export default MyModal;
  
  