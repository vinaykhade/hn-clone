import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import ListItem from '../ListItem';


import * as Styled from './styles';

function List(props) {
  const { stories, pageNum, upvote, hiddenFeeds } = props;
  const linkTo = `/news/page/${pageNum+1}`;
  return (
    <Styled.ListWrapper>
      {
      stories
      .filter(story => hiddenFeeds.indexOf(story.objectID) === -1)
      .map((story,index) => (
        <ListItem 
          key={story.objectID} 
          index={index} 
          upvoted={upvote[story.objectID]}
          pageNum={pageNum} 
          pageSize={stories.length}
          {...props}
          {...story} 
        />
      ))}

      <Link style={Styled.MoreBtn} to={linkTo}>More</Link>
     
    </Styled.ListWrapper>
  );
}

export default List;

List.defaultProp = {
  stories: [],
  pageNum: 1,
  upvote: {},
  hiddenFeeds: []
};

List.propTypes = {
  stories: propTypes.array,
  pageNum: propTypes.number,
  upvote: propTypes.object,
  hiddenFeeds: propTypes.array,
};