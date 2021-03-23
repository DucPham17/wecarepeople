import React, { useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { signout } from '../Action/userAction';
import { getPost } from '../Action/postAction';

function PostScreen(props) {
    const userInfo = useSelector(state => state.signin);
    var listPost = useSelector(state => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        if(!userInfo.userInfo){
            props.history.push("/signin");
        }
     //   listPost = dispatch(getPost());
    })

    const handleSignout = () =>{
        dispatch(signout());
    }

    return(
        <div>
            <button onClick={handleSignout}>Signout</button>
        </div>
    )
}

export default PostScreen;