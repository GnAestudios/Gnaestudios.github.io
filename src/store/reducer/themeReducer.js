import {  createSlice } from '@reduxjs/toolkit';
import themeLight from "../../themes/themeLight";
import themeDark from "../../themes/themeDark";

const initialState = {
    value: themeLight,
    status: 'idle',
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        light: (state) => {
            state.value = themeLight;
        },
        dark: (state) => {
            state.value = themeDark;
        },
    },
});

export const { light, dark } = themeSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.theme.value)`
export const selectTheme = (state) => state.theme.value;


export default themeSlice.reducer;