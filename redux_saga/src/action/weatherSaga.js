import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import API from './api';
import { ACTION_WEATHER_FETCHED, ACTION_WEATHER_QUERY } from '../constants/constants'

function* getWeather(action) {
    const city = action.payload.city;

    const resp = yield call(fetch, `${API.freeAPI}?appid=${API.freeID}&appsecret=${API.freeKey}&city=${city}`);
    const respData = yield resp.json();
    
    yield put({type: ACTION_WEATHER_FETCHED, payload: respData})
}

function* weatherSaga() {
    yield takeLatest(ACTION_WEATHER_QUERY, getWeather);
}

export default weatherSaga;