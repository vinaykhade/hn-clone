import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
            {...this.props}
            {...story} 
          />
        ))}

        <Link style={Styled.MoreBtn} to={linkTo}>More</Link>
       
      </Styled.ListWrapper>
    );
  }
}

export default List;