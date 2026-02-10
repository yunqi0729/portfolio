import { createSlice } from "@reduxjs/toolkit";

interface mode {
    isDarkMode: boolean;
}

const initialState: mode = {
    isDarkMode: false,
}

export const ModeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        updateDarkMode: (state) => {
            state.isDarkMode = !state.isDarkMode;
        },
    },
})

export default ModeSlice.reducer;
export const { updateDarkMode } = ModeSlice.actions;