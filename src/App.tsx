import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createMuiTheme, ThemeProvider, Container } from "@material-ui/core";
import Layout from "./components/Layout";

declare module "@material-ui/core/styles/createBreakpoints" {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: true;
    xl: false;
    phoneSm: true;
    phone: true;
    tablet: true;
    laptopSm: true;
    laptop: true;
    desktop: true;
    desktopMd: true;
    desktopLg: true;
  }
}

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
      main: "#0686C3",
    },
    secondary: {
      main: "#F7C667",
    },
  },
  breakpoints: {
    values: {
      lg: 1366,
      phoneSm: 320,
      phone: 500,
      tablet: 768,
      laptopSm: 960,
      laptop: 1024,
      desktop: 1280,
      desktopMd: 1366,
      desktopLg: 1920,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Container>
          <Layout />
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
