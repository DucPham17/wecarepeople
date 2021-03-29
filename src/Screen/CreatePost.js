import { useState } from 'react';
import  {Form, Button, Card}  from 'react-bootstrap';
import { Container } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../Action/postAction';

function CreatePosts(props) {
    const userInfo = useSelector(state => state.signin);
    const[message,setMessage] = useState('');
    const[file,setFile] = useState(null);
    const[image,setImage] = useState(null);
    const dispatch = useDispatch();

    const handleBackToMain = () => {
        props.history.push("/posts")
    }

    const handleCreatePost = () => {
        const form = new FormData();
        console.log(file);
        form.append('file',file);
        form.append('message',message);
        form.append('userId',userInfo.userInfo.uid);
        form.append('name',userInfo.userInfo.displayName);
        dispatch(createPost(form));
    }

    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setFile(img);
            setImage(URL.createObjectURL(img));
          }
    }

    return (
        <div>
            <div>
                <Button onClick={handleBackToMain}>Back To main</Button>
            </div>
            <Container className="signin-container"
                style={{ minHeight: "400vh" }}>
                <div className="w-100" style={{ maxWidth: "800px" }}>
                    <Card >
                        <Card.Body>
                            <h2 className="text-center mb-4"> New Post</h2>
                            <Form>
                                <Form.Group id='text'>
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control type="message" onChange={(event) => { setMessage(event.target.value) }} required></Form.Control>
                                </Form.Group>
                                <img src={image}/>
                                <input type="file" name="myImage" onChange={handleImageChange} />                           
                                <Button className='w-100' onClick={handleCreatePost} >Create</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </div>
    )
}

export default CreatePosts;