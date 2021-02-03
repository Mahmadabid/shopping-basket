import {configureStore} from '@reduxjs/toolkit';
import themeReducer from "../Slice/ThemeSlice";
import basketReducer from "../Slice/BasketSlice";

export const store = configureStore({
    reducer : {
        themes: themeReducer,
        basket: basketReducer,
    }
})