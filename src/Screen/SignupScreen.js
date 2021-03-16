import React, { useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {Form, Button, Card} from 'react-bootstrap';
import { Container } from '@material-ui/core';
import { signup } from '../Action/userAction';

function SignupScreen(props) {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[passwordCon, setPasswordCon] = useState('');
    const[name, setName] = useState('');
    const userInfo = useSelector(state => state.signin);
    const dispatch = useDispatch();
    const {loading, error} = userInfo;
    const[check,setCheck] = useState(false);

    useEffect(() => {
        if(userInfo.userInfo){
            props.history.push("/posts");
        }
    })

    const handleSignup = () => {
        if(password !== passwordCon){
            setCheck(true);
        }
        else{
            setCheck(false);
            dispatch(signup(email,password,name));
        }
    }

    return(
        <Container className="signin-container"
        style = {{minHeight: "200vh"}}>
        <div className="w-100" style={{maxWidth:"400px"}}>
            <Card>
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
                        <Form.Group id='password'>
                            <Form.Label>Comfirm Password</Form.Label>
                            <Form.Control type="password" onChange={(event) => {setPasswordCon(event.target.value)}} required></Form.Control>
                        </Form.Group>
                        <Form.Group id='name'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="email" onChange={(event) => {setName(event.target.value)}} required></Form.Control>
                        </Form.Group>
                        {check?"Password and Confirm Password not match" : null}
                        {loading? <div>Loading...</div> : error? <div>Existed Person</div> : null}
                        <Button className='w-100' onClick={handleSignup} >Sign up</Button>
                    </Form>
                    
                </Card.Body>
            </Card>
            <a href="/signin">Already have account? Signin</a>
        </div>
        </Container>
    )
}

export default SignupScreen;