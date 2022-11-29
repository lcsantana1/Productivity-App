import mongoose from 'mongoose'
const todoSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    date: {
      type:String,
      required: true,
    },
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    iscompleted:{
      type:Boolean,
      default:false,
    }
  },
  {
    timestamps: true,
  }
)
const Todo = mongoose.model('Todo', todoSchema)
export default Todo


// import React, { useState } from 'react';
// import { Form, Button } from 'react-bootstrap'

// export default function FormTodo({ addTodo }) {
//   const [value, setValue] = useState("");

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (!value) return;
//     addTodo(value);
//     setValue("");
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <Form.Group>
//         <Form.Label><b>Productivity</b></Form.Label>
//         <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add to Daily List" />
//       </Form.Group>
//       <Button variant="primary mb-3" type="submit">
//         SUBMIT
//       </Button>
//     </Form>
//   );
// }