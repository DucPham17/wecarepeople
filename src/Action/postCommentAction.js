import Axios from "axios";
import { ADD_POST_COMMENT_ACTION_FAIL, ADD_POST_COMMENT_ACTION_REQUEST, ADD_POST_COMMENT_ACTION_SUCCESS, GET_POST_COMMENT_ACTION_FAIL, GET_POST_COMMENT_ACTION_REQUEST, GET_POST_COMMENT_ACTION_SUCCESS, RESET_POST_COMMENT_ACTION } from "../Const/postConst";

export const getPostComment = (id) => async (dispatch) => {
    dispatch({
        type: GET_POST_COMMENT_ACTION_REQUEST,
        payload: {loading: true}
    });
        
    try {
        console.log("a");
        const {data} = await Axios.get("/api/posts/getPost/"+id);
        var arr = [...data.comments];
                arr.sort((a,b) => {
                    return b.date - a.date;
                })
        data.comments = arr;
        console.log(data)
        
        dispatch({
            type: GET_POST_COMMENT_ACTION_SUCCESS,
            payload : data
        })
    } catch (error) {
        dispatch({
            type: GET_POST_COMMENT_ACTION_FAIL,
            payload : error
        })
    }
}

export const resetPostComment = () => (dispatch) =>{
    dispatch({
        type: RESET_POST_COMMENT_ACTION
    })
}

export const addComment = (text,userName,userId,postId) => async (dispatch) =>{
    try {
        console.log("a");
        const {data} = await Axios.post("/api/posts/addPostComment",{text,userName,userId,postId});
        var arr = [...data.comments];
                arr.sort((a,b) => {
                    return b.date - a.date;
                })
        data.comments = arr;
        console.log(data)
        
        dispatch({
            type: ADD_POST_COMMENT_ACTION_SUCCESS,
            payload : data
        })
    } catch (error) {
        console.log("a");
    }
}