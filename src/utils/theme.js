import { createMuiTheme } from '@material-ui/core/styles';
import '../assets/fonts/fonts.css';

export const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: 'Proxima Nova, sans-serif',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 415,
      md: 1024,
      lg: 1440,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      light: '#608BAB',
      main: '#20A8D3',
      dark: '#0A3A61',
      contrastText: '#f9f9f9',
    },
    secondary: {
      light: '#555555',
      main: '#2D3133',
      dark: '#333333',
      contrastText: '#000',
    },
    color: {
      grey1: '#f1f1f1',
      grey2: '#9C9E9F',
      grey3: '#d8d8d8',
      grey4: '#3D4245',
      grey5: '#555555',
      grey6: '#2D3133',
      grey7: '#333333',
      grey8: '#2d2d2d',
      grey9: '#d3d3d3',
      grey10: '#F0F0F0',
      grey11: '#3A4851',
      blue1: '#00BCD4',
      blue2: '#608BAB',
      blue3: '#20A8D3',
      blue4: '#0A3A61',
      blue5: '#006DFF',
      red1: '#EE4052',
      red2: '#F44336',
      yellow1: '#EA9600',
      yellow2: '#FEC014',
      green1: '#00BC2E',
      green2: '#43A047',
      white: '#ffffff',
    },
  },
  overrides: {
    MuiTypography: {
      body1: {
        fontSize: '14px',
      },
    },
    MuiListItemText: {
      root: {
        padding: 0,
      },
    },
    MuiListItemIcon: {
      root: {
        marginRight: '10px',
      },
    },
    MuiFormControlLabel: {
      label: {
        textTransform: 'capitalize',
        color: '#F0F0F0',
        fontSize: 14,
        fontFamily: 'Proxima Nova, sans-serif',
      },
    },
  },
});
