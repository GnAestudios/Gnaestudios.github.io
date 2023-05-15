import { configureStore } from '@reduxjs/toolkit';
import themeReducer from "./reducer/themeReducer";


export const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:false
    })
});