import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import FormDailyTodo from "../components/FormDailyTodo";
import DailyTodo from "../components/DailyTodo";

import Monthly from '../components/Monthly';
import Weekly from '../components/Weekly';

// TODO: create user login ability
// TODO: create the backend to capture all of this data. that goes in your server folder...use the MERN challenge(challenge 21) to help you structure your backend. 

function Main() {
  const [dailyTodos, setDailyTodos] = useState([]);
  const [weeklyTodos, setWeeklyTodos] = useState([]);
  const [monthlyTodos, setMonthlyTodos] = useState([]);

  const addDailyTodo = text => {
    const newTodos = [...dailyTodos, { text }];
    setDailyTodos(newTodos);
    
    
    // save this data in the database
  };
  
  const markDailyTodo = index => {
    const newTodos = [...dailyTodos];
    newTodos[index].isDone = true;
    setDailyTodos(newTodos);
  };

  const removeDailyTodo = index => {
    const newTodos = [...dailyTodos];
    newTodos.splice(index, 1);
    setDailyTodos(newTodos);
  };
  // const addWeeklyTodo = text => {
  //   const newTodos = [...todos, { text }];
  //   setTodos(newTodos);

  
  //   // save this data in the database
  // };

  // const addMonthlyTodo = text => {
  //   const newTodos = [...todos, { text }];
  //   setTodos(newTodos);

  
  //   // save this data in the database
  // };


  // const markTodo = index => {
  //   const newTodos = [...todos];
  //   newTodos[index].isDone = true;
  //   setTodos(newTodos);
  // };

  // const removeTodo = index => {
  //   const newTodos = [...todos];
  //   newTodos.splice(index, 1);
  //   setTodos(newTodos);
  // };
  // const markTodo = index => {
  //   const newTodos = [...todos];
  //   newTodos[index].isDone = true;
  //   setTodos(newTodos);
  // };

  // const removeTodo = index => {
  //   const newTodos = [...todos];
  //   newTodos.splice(index, 1);
  //   setTodos(newTodos);
  // };

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Productivity App</h1>
        <h4 className="text-center mb-4">Daily Tasks</h4>
        <FormDailyTodo addDailyTodo={addDailyTodo} />
        <div>
          {dailyTodos.map((todo, index) => (
            <Card>
              <Card.Body>
                <DailyTodo
                  key={index}
                  index={index}
                  todo={todo}
                  markDailyTodo={markDailyTodo}
                  removeDailyTodo={removeDailyTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>

{/* 
        <Weekly 
        addTodo={addTodo}
          todos={todos}
          markTodo={markTodo}
          removeTodo={removeTodo}
        />
        <Monthly
          addTodo={addTodo}
          todos={todos}
          markTodo={markTodo}
          removeTodo={removeTodo}
        /> */}
      </div>
    </div>

  );








}


export default Main;
