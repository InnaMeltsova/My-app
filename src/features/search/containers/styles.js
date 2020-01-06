const styles = theme => ({
  topPanel: {
    color: theme.palette.primary.main,
    width: '100%',
    padding: 10
  },
  inputWrap: {
    width: '80%',
    position: 'relative'
  },
  searchInput: {
    borderRadius: 15,
    border: 'none',
    width: '100%',
    height: '40px',
    backgroundColor: theme.palette.color.grey1,
    outline: 'none',
    fontSize: '20px',
    paddingLeft: 40,
    color: theme.palette.color.grey6
  },
  searchIcon: {
    position: 'absolute',
    left: 10,
    top: '20%'
  },
  done: {
    fontWeight: 'bold',
    marginLeft: 10
  },
  bottomNavWrap: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  }
});

export default styles;
