import React from 'react';
import { Route } from 'react-router-dom';
import ShopPage from './shop';

const EditPage = ({match}) => (
  <div className="content">
    <Route path={`${match.url}/shop`} component={ShopPage} />
  </div>
);

export default EditPage;