import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { signout } from '../Action/userAction';
import NavTabs from '../Component/NavTabs';
import { Card } from 'react-bootstrap';
import { Container } from '@material-ui/core';


function InfoScreen(props) {
    const user = useSelector(state => state.signin);
    const dispatch = useDispatch();
    const { loading, userInfo, error } = user;

    useEffect(() => {
        if (!userInfo) {
            props.history.push("/");
        }
    })
    console.log(userInfo);
    const handleSignout = () => {
        dispatch(signout());
    }

    return (
        <div>
            <NavTabs />
            <Container className="signin-container">
                <div className="w-100" style={{ maxWidth: "400px" }}>
                    <Card>
                        <Card.Body>
                            <Card.Text>Name: {userInfo.displayName}</Card.Text>
                            <Card.Text>Email: {userInfo.email}</Card.Text>
                            <button onClick={handleSignout}>Signout</button>
                        </Card.Body>

                    </Card>
                </div>
            </Container>

        </div>
    )
}

export default InfoScreen;