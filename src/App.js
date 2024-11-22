// import logo from "./logo.svg";
// import React, { useState, createContext } from "react";
// import { Modal } from "./modal";
import Body from "./components/Body";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/Global";
// import data from "./data";

const theme = {
  color: {
    lime: "hsl(61, 70%, 52%)",
    red: "hsl(4, 69%, 50%)",
    slate100: "hsl(202, 86%, 94%)",
    slate300: "hsl(203, 41%, 72%)",
    slate500: "hsl(200, 26%, 54%)",
    slate700: "hsl(200, 24%, 40%)",
    slate900: "hsl(202, 55%, 16%)",
    slate1000: "hsl(202, 55%, 10%)",
  },
  mobile: 450,
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <>
        <Body />
      </>
    </ThemeProvider>
  );
};

// export default App;
export { App };
