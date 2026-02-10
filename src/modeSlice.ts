import { createSlice } from "@reduxjs/toolkit";

interface mode {
    isDarkMode: boolean;
}

const getInitialTheme = (): boolean => {
    if (typeof window !== 'undefined' && localStorage.theme) {
        return localStorage.theme === 'dark';
    }
    return typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
};

const initialState: mode = {
    isDarkMode: getInitialTheme(),
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