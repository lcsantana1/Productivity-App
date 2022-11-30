import FormMonthlyTodo from "./FormMonthlyTodo"
import Todo from "./DailyTodo";
import React from 'react'
import {Card} from  'react-bootstrap'

export default function Monthly({ addMonthlyTodo, todos, markTodo, removeTodo }) {
    return (
        <>
            <h4 className="text-center mb-4">Monthly Tasks</h4>
            {/* <FormMonthlyTodo addTodo={addTodo} /> */}
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
        </>
    )
}