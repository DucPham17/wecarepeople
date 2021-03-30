import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getPost } from '../Action/postAction';
import NavTabs from '../Component/NavTabs';
import { Button } from 'react-bootstrap';
import { postReducer } from '../Reducer/postReducer';

function PostScreen(props) {
    const userInfo = useSelector(state => state.signin);
    var listPost = useSelector(state => state.posts);
    const { loading, postInfo, error } = listPost;
    const dispatch = useDispatch();

    useEffect(() => {
        if (!userInfo.userInfo) {
            props.history.push("/signin");
        }
        dispatch(getPost());
        console.log(listPost);
    },[])

    const handleCreatePost = () => {
        props.history.push("/createpost")
    }

    return (

        <div>
            <NavTabs />
            <Button onClick={handleCreatePost}>
                Create post
            </Button>
            <div>
                {loading ? <div>Loading...</div> : error ? <div>There was an error</div> : postInfo ?
                    <div>
                        {postInfo.map((post,i) => (
                            <div className="item" key={i}>
                                <div>
                                    {post.userPostName}
                                </div>
                                <div>
                                    {(new Date(post.date)).toDateString()}
                                </div>
                                <img src={post.imgUrl}/>
                            </div>
                        ))}
                    </div>
                    : null

                }
            </div>
        </div>
    )
}

export default PostScreen;