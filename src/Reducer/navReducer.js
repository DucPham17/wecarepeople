export const navReducer = (state = {},action) => {
    switch(action.type){
        case 0:
            return 0
        case 1:
            return 1
        default:
            return state;
    }
}