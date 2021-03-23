import Axios from "axios";
import { GET_POST_ACTION_FAIL, GET_POST_ACTION_REQUEST, GET_POST_ACTION_SUCCESS } from "../Const/postConst";

export const getPost = () => async (dispatch) => {
    dispatch({
        type: GET_POST_ACTION_REQUEST,
        payload: {loading: true}
    });
        
    try {
        const {data} = await Axios.get("/api/posts/getPosts")
        
        dispatch({
            type: GET_POST_ACTION_SUCCESS,
            payload : data
        })
    } catch (error) {
        dispatch({
            type: GET_POST_ACTION_FAIL,
            payload : error
        })
    }
}