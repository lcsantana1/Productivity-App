import React from 'react';
import { MdWarning } from "react-icons/md";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Delete.css'
const Delete = (props) => {
  
    return (
      <Modal isOpen={props.show} toggle={props.toggle}>
        
     
      <ModalBody>
      <div className='conatiner'>
          <div className='row d-flex justify-content-center'>
            <div className='col-lg-4 delete-icon delete-direction'>

              <MdWarning></MdWarning>
            </div>
            <div className='col-lg-8 delete-text'>

              <h3>Are you sure?</h3>
              <span>This action cannot be undone</span>
            </div>
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
       
        <Button color="secondary" onClick={props.toggle}>
          Cancel
        </Button>{' '}
        <Button className='delete-btn' onClick={props.deleteSubmit}>
          Submit
        </Button>
      </ModalFooter>
    </Modal>
    );
};

export default Delete;