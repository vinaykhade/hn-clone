import { takeLatest, put, call, take } from 'redux-saga/effects';
import * as newsFeedAction from '../actions/newsFeed';

import { callApi } from '../utils/api';

export function* getNewsFeed(action) {
    const { pageNum } = action.payload;
    try {
        const data = yield call(callApi, `search`, 'GET', {page: pageNum, hitsPerPage: 50});
        yield put(newsFeedAction.updateNewsFeed(data.hits));
    } catch(error) {
        // console.log("error", error)
    }
}

export function* watchNewsFeedSaga() {
  yield takeLatest(newsFeedAction.GET_NEWS_FEED, getNewsFeed);
}
