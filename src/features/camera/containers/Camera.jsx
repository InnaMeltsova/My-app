import React, { Component } from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import { Grid, withStyles } from '@material-ui/core';
import { FlashAutoOutlined, FlashOnOutlined, FlashOffOutlined } from '@material-ui/icons';
import { connect } from 'react-redux';
import { savePhoto } from '@root/store/common/actions';
import NavBar from '@root/components/navbar';

import styles from './styles';

export class Camera extends Component {
  componentDidMount() {
    this.startUp()
  }

  startUp = () => {
    const video = this.videoRef;
    navigator.mediaDevices.getUserMedia({video: true, audio: false})
      .then(stream => {
        video.srcObject = stream;
        video.play()
      })
      .catch(err => console.log('err', err));
  };

  takingPicture = e => {
    const photo = this.photoRef;
    const { savePhoto, history } = this.props;
    this.takePicture();
    savePhoto(photo.src);
    history.push('/results');
    e.preventDefault()
  };

  takePicture = () => {
    const video = this.videoRef;
    const photo = this.photoRef;
    const canvas = this.canvasRef;
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, 300, 120);

    const data = canvas.toDataURL('image/png');
    photo.setAttribute('src', data);
  };

  render() {
    const { classes, history } = this.props;

    return (
      <Grid container direction="column" alignItems="center">
        <Grid className={classes.arrowBack}>
          <div className={classes.wrap}>
            <div onClick={() => history.push('/')}>
            Cancel
            </div>
            <div className={classes.photoText}>
              Photo
            </div>
            <FlashAutoOutlined fontSize="small" />
          </div>
        </Grid>
        <Grid container item direction="column" alignItems="center">
          <video height="400" className={classes.video} ref={ref => this.videoRef = ref} >Video stream not available.</video>
        </Grid>
        <div className={classes.btnBorder}>
          <button
            className={classes.startButton}
            onClick={this.takingPicture} />
        </div>
        <canvas className={classes.canvas} ref={ref => this.canvasRef = ref} >
        </canvas>
        <Grid className={classes.output}>
          <img className={classes.photo} ref={ref => this.photoRef = ref} />
        </Grid>
        <Grid container className={classes.bottomNavWrap}>
          <NavBar />
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
)(Camera);
