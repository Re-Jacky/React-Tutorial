import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { ACTION_JOKE_CLEAR, ACTION_JOKE_CLEARED, ACTION_JOKE_QUERY, ACTION_JOKE_FETCHED } from "../constants/constants";

const API = "https://api.icndb.com/jokes/random";

function* getJoke() {
    const resp = yield call(fetch, API);
    const respData = yield resp.json();
    yield put({
        type: ACTION_JOKE_FETCHED,
        payload: {
            joke: respData.value.joke
        }
    })
}

function* clearJokes() {
    yield put({
        type: ACTION_JOKE_CLEARED
    })
}


function* jokeSaga() {
    yield takeLatest(ACTION_JOKE_QUERY, getJoke);
    yield takeLatest(ACTION_JOKE_CLEAR, clearJokes);
}

export default jokeSaga;