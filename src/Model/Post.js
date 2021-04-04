import React from "react"
import { Link } from 'react-router-dom';
import { Card} from 'react-bootstrap';
import { Container } from '@material-ui/core';
function Post(props) {
   return (
    <Container className="signin-container">
    <div className="w-100" style={{maxWidth:"400px"}}>
        <Card >
            <Card.Body>
                <h2 className="text-center mb-4">{props.userPostName}</h2>
                <p>{(new Date(props.date)).toDateString()}</p>
                <p>{props.text}</p>
                <img src={props.imgUrl}/>
            </Card.Body>
        </Card>
        <Link to={"/post/" + props.id}>Comments</Link>
    </div>
    </Container>
   )

    
}

export default Post;