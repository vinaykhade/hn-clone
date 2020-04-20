import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NewsFeed from './components/App';

const Routes = () => (
    <Switch>
      <Route exact path="/" component={() => <NewsFeed />} />
      <Route exact path="/hn-clone" component={() => <NewsFeed />} />
      <Route exact path="/hn-clone/news/page/:pageNum" component={() => <NewsFeed />} />
    </Switch>
  );
  
  export default Routes;