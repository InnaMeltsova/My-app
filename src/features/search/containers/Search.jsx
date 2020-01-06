import React, { Component } from 'react';
import { Grid, withStyles } from '@material-ui/core';
import NavBar from '@root/components/navbar';
import { ArrowBackIosOutlined, SearchOutlined } from '@material-ui/icons';

import styles from './styles';

export class Search extends Component {
  render () {
    const { classes } = this.props;

    return (
      <Grid container direction="column" alignItems="center">
        <Grid container item justify="space-between" className={classes.topPanel} >
          <ArrowBackIosOutlined/>
        </Grid>
        <Grid container item className={classes.topPanel} alignItems="center">
          <div className={classes.inputWrap}>
            <input className={classes.searchInput}/>
            <SearchOutlined className={classes.searchIcon} />
          </div>
          <span className={classes.done}>
            Search
          </span>
        </Grid>
        <Grid container className={classes.bottomNavWrap}>
          <NavBar/>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Search);
