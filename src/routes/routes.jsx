import React from 'react';
import { Switch, Redirect, Route } from 'react-router';

import {
  HOME,
} from '@root/constants/routes';

import { Dashboard } from '@root/features/dashboard-layout';
import { Camera } from '@root/features/camera';

const Routes = () => (
  <Dashboard>
    <Switch>
      <Route exact path={HOME} component={Camera} />
      <Redirect from="/" to={HOME} />
    </Switch>
  </Dashboard>
);

export default Routes;
