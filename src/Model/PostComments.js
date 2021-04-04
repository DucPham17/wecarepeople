import React, { useState,useEffect } from "react"
import { Form, Button, Card} from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { Container } from '@material-ui/core';
import { addComment } from "../Action/postCommentAction";
import Comment from "./Comment";

function PostComments(props) {

    const [text,setText] = useState('');
    const userInfo = useSelector(state => state.signin);
    const dispatch = useDispatch();
    console.log(props.comments);
    const handleSend = () =>{
        console.log(props.id);
        setText("");
        dispatch(addComment(text,userInfo.userInfo.displayName,userInfo.userInfo.uid,props.id));
        props.setCount(props.count + 1);
    }
   return (
    <Container className="signin-container">
    <div className="w-100" style={{maxWidth:"400px"}}>
        <Card >
            <Card.Body>
                <h2 className="text-center mb-4">{props.userPostName}</h2>
                <p>{(new Date(props.date)).toDateString()}</p>
                <p>{props.text}</p>
                <img src={props.imgUrl}/>
                <Form>
                        <Form.Group id='text'>
                            <Form.Label>Comment</Form.Label>
                            <Form.Control type="text" onChange={(event) => {setText(event.target.value)}} required></Form.Control>
                        </Form.Group>
                </Form>
                <Button onClick={handleSend}>Send</Button>
                <div>
                    {
                    props.comments.map((com,i) => (
                        <div className="item" key={i}>
                            <Comment userName={com.userName} date={com.date} text={com.text}></Comment>
                        </div>
                    ))}
                </div>
            </Card.Body>
        </Card>
    </div>
    </Container>
   )

    
}

export default PostComments;