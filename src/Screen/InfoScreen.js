import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { signout } from '../Action/userAction';
import NavTabs from '../Component/NavTabs';


function InfoScreen(props) {
    const userInfo = useSelector(state => state.signin);
    const dispatch = useDispatch();
    const handleSignout = () => {
        dispatch(signout());
    }

    return (
        <div>
            <NavTabs />
            <button onClick={handleSignout}>Signout</button>
        </div>
    )
}

export default InfoScreen;