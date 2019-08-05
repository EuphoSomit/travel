import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const SearchContainer = lazy(() => import('./containers/Search'));

const routes = (
  <Suspense fallback={<div />}>
    <Switch>
      <Route exact path="/" component={SearchContainer} />
    </Switch>
  </Suspense>
);

export default routes;
