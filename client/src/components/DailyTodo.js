import React from 'react';
import { Form, Button } from 'react-bootstrap'

export default function DailyTodo({ todo, index, markDailyTodo, removeDailyTodo }) {

// use your mongo database to store the todo and the date when the todo is created and create a due date. 

    return (
     <div
       className="todo"
        
     >
       <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
       <div>
         <Button variant="outline-success" onClick={() => markDailyTodo(index)}>✓/completed</Button>{' '}
         <Button variant="outline-danger" onClick={() => removeDailyTodo(index)}>✕/remove</Button>
       </div>
      </div>

      
    );

    // return (
    //   <div
    //   className="todoo"

    //   >

    // )
     
 }
