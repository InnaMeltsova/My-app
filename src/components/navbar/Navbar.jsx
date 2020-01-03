import React, { Component } from 'react';
import { Grid, withStyles } from '@material-ui/core';
import { CameraAltOutlined, PhotoOutlined, SearchOutlined } from '@material-ui/icons';

import styles from './styles';

export class NavBar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container alignItems="center" justify="space-around" className={classes.bottomNav}>
        <SearchOutlined />
        <CameraAltOutlined />
        <PhotoOutlined />
      </Grid>
    )
  }
}

export default withStyles(styles)(NavBar);
