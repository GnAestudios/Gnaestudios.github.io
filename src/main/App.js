import React from "react";
import {
    ThemeProvider,
} from "@mui/material";

import CssBaseline from "@mui/material/CssBaseline";

import MiniDrawer from "./MiniDrawer";

import {useSelector} from 'react-redux'
import {selectTheme} from "../store/reducer/themeReducer";

function App() {
    const themeUsed = useSelector(selectTheme);
    return (
        <ThemeProvider theme={themeUsed}>
            <CssBaseline/>
            <MiniDrawer/>
        </ThemeProvider>
    )
}

export default App;
