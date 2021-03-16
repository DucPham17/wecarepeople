import React, { useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {Form, Button, Card} from 'react-bootstrap';
import { Container } from '@material-ui/core';
import { signin } from '../Action/userAction';

function SigninScreen(props) {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const userInfo = useSelector(state => state.signin);
    const dispatch = useDispatch();
    const {loading, error} = userInfo;

   // console.log(userInfo);

    useEffect(() => {
        if(userInfo.userInfo){
            props.history.push("/posts");
        }
    })


    const handleSignin = (e) =>{
        e.preventDefault();
       // console.log(email);
        dispatch(signin(email,password));
    }

    return(
        <Container className="signin-container"
        style = {{minHeight: "200vh"}}>
        <div className="w-100" style={{maxWidth:"400px"}}>
            <Card >
                <Card.Body>
                    <h2 className="text-center mb-4"> Sign In</h2>
                    <Form>
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" onChange={(event) => {setEmail(event.target.value)}} required></Form.Control>
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" onChange={(event) => {setPassword(event.target.value)}} required></Form.Control>
                        </Form.Group>
                        {loading? <div>Loading...</div> : error? <div>Wrong in email or password</div> : null}
                        <Button className='w-100' onClick={handleSignin} >Sign in</Button>
                    </Form>
                </Card.Body>
            </Card>
            <a href="/signup">Don't have account? Signup</a>
        </div>
        </Container>
    )
}

export default SigninScreen;