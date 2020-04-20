/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';

import newsFeed from './newsFeed';
import upvote from './upvote';
import hiddenFeeds from './hideFeed';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer() {
  const rootReducer = combineReducers({
    newsFeed,
    upvote,
    hiddenFeeds
  });

  return rootReducer;
}
