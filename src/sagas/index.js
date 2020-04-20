import { all, fork } from 'redux-saga/effects';

import { watchNewsFeedSaga } from './newsFeed';


export default function* rootSaga() {
  yield all([
    // add other watchers to the array
    fork(watchNewsFeedSaga),
  ]);
}
