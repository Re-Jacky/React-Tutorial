import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import weatherReducer from './reducers/weatherReducer';
import jokeReducer from './reducers/jokeReducer';


// combine reducers
const rootReducer = combineReducers({
    weatherReducer,
    jokeReducer
});

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// mount it on the Store
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga);

export default store;