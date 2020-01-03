import React from 'react';
import { Switch, Redirect, Route } from 'react-router';

import {
  HOME,
  RESULTS,
} from '@root/constants/routes';

import { Dashboard } from '@root/features/dashboard-layout';
import { Camera } from '@root/features/camera';
import  Results  from '@root/features/results';

const Routes = () => (
  <Dashboard>
    <Switch>
      <Route exact path={HOME} component={Camera} />
      <Route exact path={RESULTS} component={Results} />
      <Redirect from="/" to={HOME} />
    </Switch>
  </Dashboard>
);

export default Routes;
