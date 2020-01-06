import React, { Component } from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import { Grid, withStyles } from '@material-ui/core';
import { CameraAltOutlined, PhotoOutlined, SearchOutlined } from '@material-ui/icons';

import styles from './styles';

export class NavBar extends Component {
  render() {
    const { classes, history } = this.props;

    return (
      <Grid container alignItems="center" justify="space-around" className={classes.bottomNav}>
        <SearchOutlined onClick={() => history.push('/search')} />
        <CameraAltOutlined onClick={() => history.push('/camera')} />
        <PhotoOutlined onClick={() => history.push('/camera')} />
      </Grid>
    )
  }
}

export default compose(withRouter, withStyles(styles))(NavBar);
