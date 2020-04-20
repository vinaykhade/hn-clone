import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem';

import history from '../../utils/history';

import * as Styled from './styles';

class List extends Component {
  static propTypes = {
    stories: PropTypes.array.isRequired,
  };

  render() {
    const { stories, pageNum, upvote, hiddenFeeds } = this.props;
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
            {...this.props}
            {...story} 
          />
        ))}
        <Styled.MoreBtn onClick={() => history.push(`/hn-clone/news/page/${pageNum+1}`)}>More</Styled.MoreBtn>
      </Styled.ListWrapper>
    );
  }
}

export default List;