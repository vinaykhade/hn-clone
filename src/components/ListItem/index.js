import React from 'react';

import propTypes from 'prop-types';
import * as Styled from './styles';

const ListItem = ({ objectID, upvoted, url, title, points, num_comments, author, created_at_i, upvoteNews, downvoteNews, hideNewsById }) => {
  
  return (
    <Styled.Item>
      <Styled.ExternalLink href={url} rel="nofollow noreferrer noopener" target="_blank">
        <Styled.Title>
          {title} <Styled.Host>({url})</Styled.Host>
        </Styled.Title>
      </Styled.ExternalLink>
      
      <Styled.Description>
        <Styled.UpvoteBtn 
          upvoted={upvoted}
          onClick={() => upvoted ? downvoteNews({newsId: objectID}) : upvoteNews({newsId: objectID})}
        />
        <span>By {author} {new Date(created_at_i * 1000).getHours()} hours ago | </span>
        <span>{points} points | </span>
        <span>{num_comments} comments | </span>
        <Styled.HideBtn onClick={() => hideNewsById({newsId: objectID})}>hide</Styled.HideBtn>
      </Styled.Description>
    </Styled.Item>
  );
};

export default ListItem;

ListItem.defaultProp = {
  objectID: '',
  upvoted: false,
  url: '',
  title: 'NA',
  points: 0,
  num_comments: 0,
  author: 'Unknown',
  created_at_i: 0,
  upvoteNews: () => {},
  downvoteNews: () => {},
  hideNewsById: () => {}
};

ListItem.propTypes = {
  objectID: propTypes.string,
  upvoted: propTypes.bool,
  url: propTypes.string,
  title: propTypes.string,
  points: propTypes.number,
  num_comments: propTypes.number,
  author: propTypes.string,
  created_at_i: propTypes.number,
  upvoteNews: propTypes.func,
  downvoteNews: propTypes.func,
  hideNewsById: propTypes.func
};