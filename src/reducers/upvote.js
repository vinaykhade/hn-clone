import initialState from './initialState';
import * as upvoteAction from '../actions/upvote';

const reducer = (state = initialState.upvoteMap, action) => {
  switch (action.type) {
    case upvoteAction.UPVOTE_NEWS: {
      const { newsId } = action.payload;
      return {
          ...state,
          ...{
            [newsId]: true
          },
      };
    }

    case upvoteAction.DOWNVOTE_NEWS: {
        const { newsId } = action.payload;
        return {
            ...state,
            ...{
              [newsId]: false
            },
        };
      }

    default: {
      return state;
    }
  }
};

export default reducer;
