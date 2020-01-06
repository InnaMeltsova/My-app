import React from 'react';
import { Switch, Redirect, Route } from 'react-router';

import {
  HOME,
  CAMERA,
  RESULTS,
  SEARCH
} from '@root/constants/routes';

import { Dashboard } from '@root/features/dashboard-layout';
import { Camera } from '@root/features/camera';
import  Results  from '@root/features/results';
import  Search  from '@root/features/search';

const Routes = () => (
  <Dashboard>
    <Switch>
      <Route exact path={CAMERA} component={Camera} />
      <Route exact path={RESULTS} component={Results} />
      <Route exact path={SEARCH} component={Search} />
      <Redirect from="/" to={HOME} />
    </Switch>
  </Dashboard>
);

export default Routes;
