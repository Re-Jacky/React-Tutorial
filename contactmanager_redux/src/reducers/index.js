import { combineReducers } from 'redux'
import contactReducer from './contactReducer'
import testReducer from './testReducers'

export default combineReducers({
    contact: contactReducer,
    test: testReducer
});