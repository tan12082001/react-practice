import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
    name: 'reduxCounter',
    initialState,
    reducers: {
        incrementCount: (state) => {
            state.value += 1;
        },
        decrementCount: (state) => {
            state.value -= 1;
        },
        incrementByCount: (state, action) => {
            state.value += action.payload;
        },
        decrementByCount: (state, action) => {
            state.value -= action.payload;
        },
    },
});

export const { incrementCount, decrementCount, incrementByCount, decrementByCount } = counterSlice.actions;
export default counterSlice.reducer;