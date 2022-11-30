import FormTodo from "./FormDailyTodo"
import Todo from "./DailyTodo";
import React from 'react'
import {Card} from  'react-bootstrap'

export default function Weekly({ addTodo, todos, markTodo, removeTodo }) {
    return (
        <>
            <h4 className="text-center mb-4">Weekly Tasks</h4>
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
        </>
    )
}