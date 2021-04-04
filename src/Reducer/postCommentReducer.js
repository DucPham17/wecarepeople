import {RESET_POST_COMMENT_ACTION, GET_POST_COMMENT_ACTION_FAIL, GET_POST_COMMENT_ACTION_REQUEST, GET_POST_COMMENT_ACTION_SUCCESS, ADD_POST_COMMENT_ACTION_REQUEST, ADD_POST_COMMENT_ACTION_SUCCESS, ADD_POST_COMMENT_ACTION_FAIL } from "../Const/postConst";


export const postCommentReducer = (state = {},action) => {
    switch(action.type){
        case GET_POST_COMMENT_ACTION_REQUEST:
            return {loading : true}
        case GET_POST_COMMENT_ACTION_SUCCESS:
            return {postInfo : action.payload, loading : false}
        case GET_POST_COMMENT_ACTION_FAIL:
            return {error: action.payload, loading: false}
        case RESET_POST_COMMENT_ACTION:
            return {postInfo: null, loading : false}
        case ADD_POST_COMMENT_ACTION_REQUEST:
            return {loading : true}
        case ADD_POST_COMMENT_ACTION_SUCCESS:
            return {postInfo : action.payload, loading : false}
        default:
            return state;
    }
}