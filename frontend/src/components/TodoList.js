import React from "react";
import ListGroup from "react-bootstrap/ListGroup"

export default function TodoList({ todos = [] }){
    
    return <ListGroup>
        {todos.map(t => {
            return <ListGroup.Item key={t.id}>
                {t.name}
            </ListGroup.Item>
        })}
    </ListGroup>
}