import initialState from './initialState';
import * as newsFeedAction from '../actions/newsFeed';

const reducer = (state = initialState.newsFeed, action) => {
  switch (action.type) {
    case newsFeedAction.UPDATE_NEWS_FEED: {
      const newsFeed = action.payload;
      return [
        ...newsFeed
      ];
    }

    default: {
      return state;
    }
  }
};

export default reducer;
