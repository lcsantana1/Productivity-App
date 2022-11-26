import React,{useState,useRef} from 'react'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const Edit = (props) => {
   const {title}=props
  
    
    const [body,setBody]=useState("")
  
  
   
    const handleSubmit=(e)=>{
      e.preventDefault()
   
      const title=e.target.title.value
    

  props.editsubmit({title})
   }

  return (
    <div>
    <Modal isOpen={props.show} toggle={props.toggle}>
    <ModalHeader toggle={props.toggle}>Edit todo</ModalHeader>
    <ModalBody>
    <div className="row modal-div">
<div className="col-lg-12">
  <div className="">
    
    <div className="">
      <div className="form-validation">
        <form className="form-valide" onSubmit={handleSubmit}>
   
              <div className="form-group row">
                <label className="col-lg-3 col-form-label" >Title:
                </label>
                <div className="col-lg-9 mb-3">
                  <input type="text" className="form-control" id="val-username"  name="title" defaultValue={title}/>
                </div>
              </div>
        
             
            
       
       <ModalFooter>
     
      <Button color="secondary" onClick={props.toggle}>
        Cancel
      </Button>{' '}
      <Button color="primary">
        Submit
      </Button>
    </ModalFooter>
         
        </form>
      </div>
    </div>
  </div>
</div>

</div>
    </ModalBody>
  
  </Modal>

</div>
  )
}

export default Edit

