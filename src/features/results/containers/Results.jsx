import React, { Component } from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import { Grid, withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import Tesseract from 'tesseract.js';
import { ArrowBackIosOutlined } from '@material-ui/icons';
import  NavBar  from '@root/components/navbar';

import styles from './styles';

export class Results extends Component {
  componentDidMount() {
    const { photoSrc } = this.props;
    Tesseract.recognize(photoSrc, 'eng', { logger: m => console.log(m)})
      .then(({ data: { text } }) => {
        console.log(text)
      });
  }

  render() {
    const { classes, photoSrc, history } = this.props;

    return (
      <Grid container direction="column" alignItems="center">
        <Grid className={classes.arrowBack}>
          <div className={classes.wrap}>
            <div>
              <ArrowBackIosOutlined onClick={() => history.push('/camera')} />
            </div>
            <div className={classes.photoText}>
              Photo
            </div>
            <div className={classes.done}>
              Done
            </div>
          </div>
        </Grid>
        <Grid container item direction="column" alignItems="center" className={classes.output}>
          <img src={photoSrc} alt="" className={classes.photo} />
        </Grid>
        <Grid container className={classes.bottomNavWrap}>
          <NavBar/>
        </Grid>
      </Grid>
    )
  }
}

export const mapStateToProps = state => ({
  photoSrc: state.photo.photoSrc
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
)(Results);
