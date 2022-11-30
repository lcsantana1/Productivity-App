import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap'

export default function FormMonthlyTodo({ addMonthlyTodo }) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addMonthlyTodo(value);
        setValue("");
    };

    return (
   <Form onSubmit={handleSubmit}>
     <Form.Group>
       <Form.Label><b>Productivity</b></Form.Label>
       <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add to Monthly List" />
     </Form.Group>
     <Button variant="primary mb-3" type="submit">
       SUBMIT
     </Button>
       </Form>
    );
}
