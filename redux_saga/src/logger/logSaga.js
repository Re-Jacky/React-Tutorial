import { select, takeEvery } from 'redux-saga/effects';

import { weatherSelector, jokeSelector} from '../selector/selector';

function getStateSelectorFromAction(action) {
  const type = action.type;
  if (/_JOKE_/i.test(type)) {
    return jokeSelector;
  } else if (/_WEATHER/i.test(type)) {
    return weatherSelector;
  }
}

function* watchAndLog() {
  yield takeEvery('*', function* logger(action) {
    const selector = getStateSelectorFromAction(action);
    const state = yield select(selector);

    console.log('action', action)
    console.log('state after', state)
  })
}

export default watchAndLog;