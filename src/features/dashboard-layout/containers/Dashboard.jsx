import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Grid, withStyles } from '@material-ui/core';

import styles from './styles';

export class Dashboard extends Component {
  render() {
    const { children, classes, history } = this.props;

    return (
      <Grid className={classes.root} container direction="column">
        <Grid className={classes.wrapper} item container>
          <Grid className={classes.contentWrapper} item>
            { children }
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export const mapStateToProps = state => ({

});

const mapDispatchToProps = {

};

export default compose(
  withRouter,
  withStyles(styles, { withTheme: true }),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Dashboard);
