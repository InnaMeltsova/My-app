import React, { Component } from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import { Grid, withStyles } from '@material-ui/core';
import { connect } from 'react-redux';

import styles from './styles';

export class Camera extends Component {
  constructor(props) {
    super(props);

    this.state = {
      streaming: false,
      video: null,
      canvas: null,
      photo: null,
      startButton: null
    }
  }

  componentDidMount() {
    this.startUp()
  }

  // componentDidUpdate() {
  //   this.startUp()
  // }

  startUp = () => {
    const video = this.videoRef;
    const startBtn = this.startBtnRef;
    navigator.mediaDevices.getUserMedia({video: true, audio: false})
      .then(stream => {
        video.srcObject = stream;
        video.play()
      })
      .catch(err => console.log(111, err))

    this.setState({ streaming: true })
  };

  takingPicture = e => {
    this.takePicture();
    e.preventDefault()
  };

  takePicture = () => {

  };

  render() {
    const { classes } = this.props;

    return (
      <Grid container direction="column" alignItems="center" className={classes.wrapper}>
        <Grid container item direction="column" alignItems="center">
          <video className={classes.video} ref={ref => this.videoRef = ref} >Video stream not available.</video>
          <button
            className={classes.startButton}
            ref={ref => this.startBtnRef = ref}
            onClick={this.takingPicture} >
            Take photo
          </button>
        </Grid>
        <canvas className={classes.canvas} ref={ref => this.canvasRef = ref} >
        </canvas>
        <Grid className={classes.output}>
          <img className={classes.photo} ref={ref => this.photoRef = ref} alt="photo"/>
        </Grid>
      </Grid>
    )
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
)(Camera);
