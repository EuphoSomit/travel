import React, { Suspense, lazy } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';

const SearchContainer = lazy(() => import('./containers/search'));

const routes = (
  <>
    <Header />
    <div className="container main">
      <Suspense fallback={<div />}>
        <Switch>
          <Route path="/search" component={SearchContainer} />
          <Redirect from="/" to="/search" />
        </Switch>
      </Suspense>
    </div>
    <Footer />
  </>
);

export default routes;
