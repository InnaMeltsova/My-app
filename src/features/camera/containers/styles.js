const styles = theme => ({
  wrapper: {

  },
  video: {
    border: '1px solid #ccc',
    width: '100%',
    height: 240
  },
  startButton: {
    width: 60,
    height: 60,
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    fontWeight: 'bold',
    marginTop: 30
  },
  canvas: {
    display: 'none'
  },
  output: {

  },
  photo: {
    width: '100%',
    height: 240
  }
});

export default styles;
