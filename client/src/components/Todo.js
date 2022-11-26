import React from 'react';
import { Form, Button } from 'react-bootstrap'

export default function Todo({ todo, index, markTodo, removeTodo }) {

  // create the fuctionality to capture the content of the todo..DONE

// use your mongo database to store the todo and the date when the todo is created and create a due date. 
    return (
      <div
        className="todo"
        
      >
        <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
        <div>
          <Button variant="outline-success" onClick={() => markTodo(index)}>✓/completed</Button>{' '}
          <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕/remove</Button>
        </div>
      </div>
    );
  }