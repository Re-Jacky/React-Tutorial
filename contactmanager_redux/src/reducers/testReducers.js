import { TEST } from "../actions/types";


const initialState = {
    contacts: [1,2,3]
} ; 

const testReducer = function(state=initialState, action){
    switch(action.type){
        case TEST:
            return {
                ...state
            }
        default:
            return state;
    }
}

export default testReducer;