/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from '../utils/history';
import newsFeed from './newsFeed';
import upvote from './upvote';
import hiddenFeeds from './hideFeed';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer() {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    newsFeed,
    upvote,
    hiddenFeeds
  });

  return rootReducer;
}
