const styles = theme => ({
  root: {
    height: '100vh',
    fontSize: theme.typography.fontSize,
    fontFamily: theme.typography.fontFamily,
    overflow: 'hidden',
  },
  wrapper: {
    flex: 'auto',
    height: '100%',
    [theme.breakpoints.down('md')]: {
      height: '100%',
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    },
  },
  contentWrapper: {
    height: '100%',
    width: 'calc(100% - 256px)',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      width: 'calc(100% - 58px)',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '100%',
    },
  },
});

export default styles;
