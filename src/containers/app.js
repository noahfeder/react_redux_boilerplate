import React from 'react';
import {Route, Router} from 'react-router';

import Todos from '../components/todos';
import NotFound from '../components/notFound';
import Shell from '../components/shell';

const routes =
  <Router>
    <Route component={Shell}>
      <Route path="/" component={Todos} />
    </Route>
    <Route path='*' component={NotFound}/>
  </Router>;

const app = ({ history}) => <Router history={history}>{routes}</Router>

export default app;