import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getPost } from '../Action/postAction';
import NavTabs from '../Component/NavTabs';
import { postReducer } from '../Reducer/postReducer';

function PostScreen(props) {
    const userInfo = useSelector(state => state.signin);
    var listPost = useSelector(state => state.posts);
    const { loading, postInfo,error } = listPost;
    const dispatch = useDispatch();

    useEffect(() => {
        if (!userInfo.userInfo) {
            props.history.push("/signin");
        }
        dispatch(getPost());
        console.log(listPost);
    }, [])


    return (

        <div>
            <NavTabs />
            {loading ? <div>Loading...</div> : error ? <div>There was an error</div> :
                <div>
                    {postInfo.map(post => (
                        <div className="item">
                            <div>
                                {post.userPostName}
                            </div>
                        </div>
                    ))}
                </div>

            }
        </div>
    )
}

export default PostScreen;