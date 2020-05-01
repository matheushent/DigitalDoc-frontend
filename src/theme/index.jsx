import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1976d2",
      contrastText: "#fff"
    },
    secondary: {
      main: "#004ba0",
      contrastText: "#fff"
    }
  }
});

export default theme;
