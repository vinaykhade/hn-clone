import React from 'react';
import { Switch, Route , BrowserRouter} from 'react-router-dom';

import NewsFeed from './components/App';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <NewsFeed />} />
      <Route exact path="/news/page/:pageNum" component={() => <NewsFeed />} />
    </Switch>
  </BrowserRouter>
  );
  
  export default Routes;