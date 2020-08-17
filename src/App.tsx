import React from "react";
import Layout from "./components/Layout";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Roboto Slab",
      "serif",
      " sans-serif",
      "Helvetica",
      "Arial",
    ].join(","),
  },
  palette: {
    primary: {
      main: "#8550FC",
    },
    secondary: {
      main: "#FC8E53",
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
