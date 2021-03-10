import { ACTION_JOKE_CLEARED, ACTION_JOKE_FETCHED } from '../constants/constants';

const initialState = {
    jokes: []
};

const jokeReducer = function(state = initialState, action) {
    switch(action.type) {
        case ACTION_JOKE_FETCHED:
            const data = action.payload;
            return {
                jokes: [...state.jokes, data.joke]
            };
        case ACTION_JOKE_CLEARED:
            return {
                jokes: []
            };
        default:
            return state;            
    }
}

export default jokeReducer;