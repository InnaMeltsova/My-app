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
  done: {
    fontWeight: 'bold',
  },
  output: {
    position: 'absolute',
    top: 40,
    width: '100%'
  },
  photo: {
    width: '100%',
    height: 400
  },
  bottomNavWrap: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  }
});

export default styles;
