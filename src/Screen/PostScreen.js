import React, { useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { signout } from '../Action/userAction';


function PostScreen(props) {
    const userInfo = useSelector(state => state.signin);
    const dispatch = useDispatch();

    useEffect(() => {
        if(!userInfo.userInfo){
            props.history.push("/signin");
        }
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