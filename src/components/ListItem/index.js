import React from 'react';
import PropTypes from 'prop-types';

import { Item, Title, Host, ExternalLink, Description } from './styles';
import * as Styled from './styles';

const ListItem = ({ objectID, upvoted, url, title, points, num_comments, author, created_at_i, pageSize, pageNum, index, upvoteNews, downvoteNews, hideNewsById }) => {
  
  return (
    <Styled.Item>
      {/* <span>{index*pageNum}</span> */}
      <Styled.ExternalLink href={url} rel="nofollow noreferrer noopener" target="_blank">
        <Styled.Title>
          {title} <Host>({url})</Host>
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

// ListItem.propTypes = {
//   by: PropTypes.string.isRequired,
//   kids: PropTypes.array,
//   score: PropTypes.number.isRequired,
//   url: PropTypes.string,
//   title: PropTypes.string.isRequired,
//   id: PropTypes.number.isRequired,
//   type: PropTypes.string.isRequired,
//   time: PropTypes.number.isRequired,
// };

export default ListItem;