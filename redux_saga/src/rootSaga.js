import { all } from "@redux-saga/core/effects";
import weatherSaga from './action/weatherSaga';
import jokeSaga from './action/jokeSaga';
import watchAndLog from './logger/logSaga';

export default function* rootSaga() {
    yield all([
        jokeSaga(),
        weatherSaga(),
        watchAndLog()
    ])
}