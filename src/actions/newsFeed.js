export const GET_NEWS_FEED = 'GET_NEWS_FEED';
export const UPDATE_NEWS_FEED = 'UPDATE_NEWS_FEED';

export const getNewsFeed = payload => ({
    type: GET_NEWS_FEED,
    payload,
});

export const updateNewsFeed = payload => ({
    type: UPDATE_NEWS_FEED,
    payload,
});