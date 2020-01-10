const styles = theme => ({
  wrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  arrowBack: {
    color: theme.palette.primary.main,
    width: '100%',
    padding: 10
  },
  photoText: {
    color: theme.palette.secondary.contrastText,
    fontWeight: 'bold',
    position: 'absolute',
    left: '44%'
  },
  btnBorder: {
    border: '2px solid #20A8D3',
    borderRadius: '50%',
    marginTop: '20%',
  },
  startButton: {
    width: 50,
    height: 50,
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    fontWeight: 'bold',
    margin: 2,
    outline: 'none',
  },
  // video: {
  //   width: '100%'
  // },
  canvas: {
    display: 'none'
  },
  output: {
    position: 'absolute',
    top: 40,
    width: '100%'
  },
  photo: {
    // width: '100%',
    height: 400
  },
  bottomNavWrap: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  }
});

export default styles;
