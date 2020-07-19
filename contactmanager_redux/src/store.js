import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'

const initialState = {};

const middlerware = [thunk];

const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middlerware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store;