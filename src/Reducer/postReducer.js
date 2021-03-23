import { GET_POST_ACTION_FAIL, GET_POST_ACTION_REQUEST, GET_POST_ACTION_SUCCESS } from "../Const/postConst";

export const postReducer = (state = {},action) => {
    switch(action.type){
        case GET_POST_ACTION_REQUEST:
            return {loading : true}
        case GET_POST_ACTION_SUCCESS:
            return {userInfo : action.payload, loading : false}
        case GET_POST_ACTION_FAIL:
            return {error: action.payload, loading: false}
        default:
            return state;
    }
}