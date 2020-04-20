export const UPVOTE_NEWS = 'UPVOTE_NEWS';
export const DOWNVOTE_NEWS = 'DOWNVOTE_NEWS';


export const upvoteNews = (payload) => ({
    type: UPVOTE_NEWS,
    payload,
});

export const downvoteNews = (payload) => ({
    type: DOWNVOTE_NEWS,
    payload,
});
