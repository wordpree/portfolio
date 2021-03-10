import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Layout from "./components/Layout";

// declare module "@material-ui/core/styles/createBreakpoints" {
//   interface BreakpointOverrides {
//     phoneSm: true;
//     phone: true;
//     tablet: true;
//     laptopSm: true;
//     laptop: true;
//     desktop: true;
//     desktopMd: true;
//     desktopLg: true;
//   }
// }

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "'Source Sans Pro'",
      "sans-serif",
      "serif",
      "Helvetica",
      "Arial",
    ].join(","),
  },
  palette: {
    primary: {
      main: "#0672A6",
    },
    secondary: {
      main: "#D59210",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
