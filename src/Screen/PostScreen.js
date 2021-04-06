import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getPost } from '../Action/postAction';
import NavTabs from '../Component/NavTabs';
import { Button } from 'react-bootstrap';
import Post from  '../Model/Post'

function PostScreen(props) {
    const userInfo = useSelector(state => state.signin);
    var listPost = useSelector(state => state.posts);
    const { loading, postInfo, error } = listPost;
    const dispatch = useDispatch();
    console.log(userInfo.userInfo);
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
                                <Post id={post.postId} userPostName={post.userPostName}
                                date={post.date} text={post.text} imgUrl={post.imgUrl}></Post>
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