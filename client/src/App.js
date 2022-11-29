import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import FormTodo from "./components/FormTodo";
import Todo from "./components/Todo";
import 'bootstrap/dist/css/bootstrap.min.css';

// TODO: create user login ability
// TODO: create the backend to capture all of this data. that goes in your server folder...use the MERN challenge(challenge 21) to help you structure your backend. 

function App() {
 const [todos, setTodos] = useState([]);

 const addTodo = text => {
   const newTodos = [...todos, { text }];
   setTodos(newTodos);
    // save this data in the database
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
   setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
   <div className="app">
     <div className="container">
       <h1 className="text-center mb-4">Productivity App</h1>
        <FormTodo addTodo={addTodo} />
        <div>
         {todos.map((todo, index) => (
           <Card>
             <Card.Body>
               <Todo
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}


export default App;
