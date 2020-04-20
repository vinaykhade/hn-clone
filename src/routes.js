import React from 'react';
import { Switch, Route , BrowserRouter} from 'react-router-dom';

import NewsFeed from './components/App';

const Routes = () => (
  <BrowserRouter  basename="/hn-clone">
    <Switch>
      <Route exact path="/" component={() => <NewsFeed />} />
      <Route exact path="/hn-clone" component={() => <NewsFeed />} />
      {/* <Route exact path="/hn-clone/news/page/:pageNum" component={() => <NewsFeed />} /> */}
      <Route exact path="/news/page/:pageNum" component={() => <NewsFeed />} />
    </Switch>
  </BrowserRouter>
  );
  
  export default Routes;