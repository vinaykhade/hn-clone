import initialState from './initialState';
import * as hideFeedAction from '../actions/hideFeed';

const reducer = (state = initialState.hiddenFeeds, action) => {
  switch (action.type) {
    case hideFeedAction.HIDE_NEWS: {
      const { newsId } = action.payload;
      return  [
        ...state,
        ...[newsId]
      ];
    }

    default: {
      return state;
    }
  }
};

export default reducer;
