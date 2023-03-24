import React from "react";
import "./App.css";
import Home from "./pages/Home";
import {ThemeProvider} from "@mui/material";
import theme from "./theme";

function App() {
  return (
    <div className="App">
        <ThemeProvider theme={theme}>
            <Home/>
        </ThemeProvider>
    </div>
  );
}

export default App;
