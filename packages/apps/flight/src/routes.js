import React, { Suspense, lazy } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

const App = lazy(() => import('./App'));

const routes = (
  <Suspense fallback={<div />}>
    <Switch>
      <Route path="/" component={App} />
      <Redirect from="/" to="/App" />
    </Switch>
  </Suspense>
);

export default routes;
