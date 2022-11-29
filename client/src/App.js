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
// contains all the todos and whether they are done or not
// function App() {
//   const [todos, setTodos] = React.useState([
//     {
//       text: "This is a sampe todo",
//       isDone: false
//     }
//   ]);
// }

//adding todo's
// const addTodo = text => {
//   const newTodos = [...todos, { text }];
//   setTodos(newTodos);
// };

//mark todo function
// const markTodo = index => {
//   const newTodos = [...todos];
//   newTodos[index].isDone = true;
//   setTodos(newTodos);
// };

//deleting the todo's


//returning the JSX rendering -using a form todo component
// return (
//   <div className="app">
//     <div className="container">
//       <h1 className="text-center mb-4">Todo List</h1>
//       <FormTodo addTodo={addTodo} />
//       <div>
//         {todos.map((todo, index) => (
//           <Card>
//             <Card.Body>
//               <Todo
//               key={index}
//               index={index}
//               todo={todo}
//               markTodo={markTodo}
//               removeTodo={removeTodo}
//               />
//             </Card.Body>
//           </Card>
//         ))}
//       </div>
//     </div>
//   </div>
// );

// function Todo({ todo, index, markTodo, removeTodo }) {
//   return (
//     <div
//       className="todo"
      
//     >
//       <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
//       <div>
//         <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
//         <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
//       </div>
//     </div>
//   );
// }

// function FormTodo({ addTodo }) {
//   const [value, setValue] = React.useState("");

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (!value) return;
//     addTodo(value);
//     setValue("");
//   };

//   return (
//     <Form onSubmit={handleSubmit}> 
//     <Form.Group>
//       <Form.Label><b>Add Todo</b></Form.Label>
//       <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
//     </Form.Group>
//     <Button variant="primary mb-3" type="submit">
//       Submit
//     </Button>
//   </Form>
//   );
// }

export default App;