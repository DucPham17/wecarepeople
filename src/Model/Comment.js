import {Card } from 'react-bootstrap';
import React from "react"

function Comment(props) {
    return (
        <div>
            <Card>
                <Card.Body>
                    <h5 className="text-center mb-4">{props.userName}</h5>
                    <p>{(new Date(props.date)).toDateString()}</p>
                    <p>{props.text}</p>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Comment;