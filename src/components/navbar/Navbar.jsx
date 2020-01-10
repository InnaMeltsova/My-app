import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Grid, withStyles } from '@material-ui/core';
import { CameraAltOutlined, PhotoOutlined, SearchOutlined } from '@material-ui/icons';
import { savePhoto } from '@root/store/common/actions';

import styles from './styles';

export class NavBar extends Component {

  readImg = event => {
    const { savePhoto, history } = this.props;
    const input = event.target;
    const reader = new FileReader();

    reader.onload = () => {
      console.log('reader.result', reader.result);
      savePhoto(reader.result);
      history.push('/results');
    };
    reader.readAsDataURL(input.files[0]);
  };

  render() {
    const { classes, history } = this.props;

    return (
      <Grid container alignItems="center" justify="space-around" className={classes.bottomNav}>
        <SearchOutlined onClick={() => history.push('/search')} />
        <CameraAltOutlined onClick={() => history.push('/camera')} />
        <Grid className={classes.inputWrap}>
          <PhotoOutlined/>
          <input
            type="file"
            accept="image/gif, image/jpeg, image/png, image/heic"
            className={classes.hiddenInput}
            onChange={this.readImg}
          />
        </Grid>
      </Grid>
    )
  }
}

export const mapStateToProps = state => ({
  photoSrc: state.photo.photoSrc
});

const mapDispatchToProps = {
  savePhoto,
};

export default compose(
  withRouter,
  withStyles(styles, { withTheme: true }),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(NavBar);

