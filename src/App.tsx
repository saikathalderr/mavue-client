import React from "react";
import "./App.css";
import Home from "./pages/Home";
import {createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#3FD4F4',
        },
        secondary: {
            main: '#987EFF',
        },
        error: {
            main: '#FD849F'
        },
        info: {
            main: '#2FD1F3',
        },
        warning: {
            main: '#F9BA00',
        }
    },
});

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
