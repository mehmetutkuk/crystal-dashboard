import React from 'react';
import { Route } from 'react-router-dom';
import ShopPage from './shop';
import HomePage from './home-page';
const EditPage = ({match}) => (
  <div className="content">
    <Route path={`${match.url}/shop`} component={ShopPage} />
    <Route path={`${match.url}/home-page`} component={HomePage} />
  </div>
);

export default EditPage;