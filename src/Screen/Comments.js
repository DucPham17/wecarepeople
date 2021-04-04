import { useEffect, useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import PostComments from '../Model/PostComments';
import { getPostComment } from '../Action/postCommentAction';
function Comments(props) {
    const curPost = useSelector(state => state.postComment);
    const { loading, postInfo, error } = curPost;
    const [count,setCount] = useState(0);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPostComment(props.match.params.id))
        console.log(curPost.postInfo);
    },[count])

    const handleBackToMain = () => {
        props.history.push("/posts")
    }

    return (
        <div>
            {loading ? <div>Loading...</div> : error ? <div>There was an error</div> : postInfo ?
            <div>
            <div>
                <Button onClick={handleBackToMain}>Back To main</Button>
            </div>
            <div>
                {postInfo ? <div>
                    <PostComments id={props.match.params.id} userPostName={postInfo.userPostName}
                        date={postInfo.date} text={postInfo.text} imgUrl={postInfo.imgUrl} comments={postInfo.comments}
                        count={count} setCount={setCount}></PostComments>
                </div> : <div>Loading...</div>}
            </div>
            </div>
            : null}
        </div>
    )
}

export default Comments;