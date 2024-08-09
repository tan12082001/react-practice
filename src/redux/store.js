import { configureStore } from "@reduxjs/toolkit";
import reduxCounterReducer from './counter/counterSlice';

const store = configureStore({
    reducer: {
        reduxCounter: reduxCounterReducer,
    },
});

export default store;