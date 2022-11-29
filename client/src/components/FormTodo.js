//import React, { useState } from 'react';
//import { Form, Button } from 'react-bootstrap'

//export default function FormTodo({ addTodo }) {
 // const [value, setValue] = useState("");

 // const handleSubmit = e => {
 //   e.preventDefault();
  //  if (!value) return;
 //   addTodo(value);
 //   setValue("");
//  };

  //return (
   // <Form onSubmit={handleSubmit}>
    //  <Form.Group>
     //   <Form.Label><b>Productivity</b></Form.Label>
    //    <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add to Daily List" />
    //  </Form.Group>
   //   <Button variant="primary mb-3" type="submit">
    //    SUBMIT
    //  </Button>
    //    </Form>
 // );
//}

import mongoose from 'mongoose'
const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        enum: ['USER', 'ADMIN'],
        default: 'USER'
    },
})
export default mongoose.model('User', userSchema)

