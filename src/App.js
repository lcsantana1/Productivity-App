import logo from './logo.svg';
import './App.css';
import React from "react";
import "./App.css";
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// contains all the todos and whether they are done or not
function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "This is a sampe todo",
      isDone: false
    }
  ]);
}

//adding todo's
const addTodo = text => {
  const newTodos = [...todos, { text }];
  setTodos(newTodos);
};

//mark todo function
const markTodo = index => {
  const newTodos = [...todos];
  newTodos[index].isDone = true;
  setTodos(newTodos);
};

//deleting the todo's
const removeTodo = index => {
  const newTodos = [...todos];
  newTodos.splice(index, 1);
  setTodos(newTodos);
};

//returning the JSX rendering -using a form todo component
return (
  <div className="app">
    <div className="container">
      <h1 className="text-center mb-4">Todo List</h1>
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

export default App;
