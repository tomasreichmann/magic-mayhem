/* eslint-disable no-underscore-dangle */

import { SheetsRegistry } from 'jss';
import { createMuiTheme, createGenerateClassName } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';
import blueGrey from '@material-ui/core/colors/blueGrey';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
//   {
//     "palette": {
//         "primary1Color": "#039be5",
//         "accent1Color": "#b71c1c",
//         "alternateTextColor": "#37474f",
//         "secondaryTextColor": "#757575",
//         "canvasColor": "#212121",
//         "borderColor": "#616161",
//         "primary3Color": "rgba(216, 67, 21, 0.5)",
//         "disabledColor": "rgba(97, 97, 97, 0.98)",
//         "accent2Color": "#bf360c",
//         "textColor": "rgba(236, 239, 241, 0.5)",
//         "accent3Color": "#ff9e80"
//     },
//     "appBar": {
//         "color": "rgba(38, 50, 56, 0.25)",
//         "textColor": "rgba(176, 190, 197, 0.75)"
//     },
//     "flatButton": {
//         "textColor": "rgba(236, 239, 241, 0.5)"
//     },
//     "raisedButton": {
//         "secondaryTextColor": "rgba(207, 216, 220, 0.75)",
//         "primaryTextColor": "#b3e5fc"
//     },
//     "tabs": {
//         "backgroundColor": "#37474f",
//         "textColor": "rgba(144, 164, 174, 0.7)",
//         "selectedTextColor": "#cfd8dc"
//     },
//     "timePicker": {
//         "textColor": "#607d8b"
//     }
// }
  palette: {
    type: 'dark',
    common: {
      white: grey[500],
    },
    primary: {
      light: lightBlue[400],
      main: lightBlue[600],
      dark: lightBlue[900],
      contrastText: grey[900],
    },
    secondary: {
      light: red[600],
      main: red[800],
      dark: red[900],
    },
    grey: blueGrey,
    background: {
      paper: grey[800],
    },
    text: {
      primary: "rgba(255, 255, 255, 0.75)"
    }
  },
  typography: {
    fontFamily: 'Eczar, Helvetica, Arial, sans-serif',
    fontSize: 15,
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none'
      }
    },
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: 'rgba(0,0,0,0.2)'
      }
    }
  }
});

function createPageContext() {
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName(),
  };
}

export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  }

  // Reuse context on the client-side.
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}
