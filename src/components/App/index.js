import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withRouter } from "react-router";
import App from './App';
import * as newsFeedActions from '../../actions/newsFeed';
import * as upvoteActions from '../../actions/upvote';
import * as hideFeedActions from '../../actions/hideFeed';


function mapStateToProperties(state) {
  const { upvote, newsFeed, hiddenFeeds } = state;
  return {
    newsFeed,
    upvote,
    hiddenFeeds
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...newsFeedActions,
      ...upvoteActions,
      ...hideFeedActions
    },
    dispatch,
  );
}

export default withRouter(connect(
  mapStateToProperties,
  mapDispatchToProps,
)(App));
