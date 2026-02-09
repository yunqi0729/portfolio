import { createSlice } from "@reduxjs/toolkit";

interface ColourConstants {
    primaryColourLight: string;
    secondaryColourLight: string;
    tertiaryColourLight: string;
    backgroundColourLight: string;
    sidebarBackgroundColourLight: string;
    primaryColourDark: string;
    secondaryColourDark: string;
    tertiaryColourDark: string;
    backgroundColourDark: string;
    sidebarBackgroundColourDark: string;
    whiteColour: string;
    blackColour: string;
}

const initialState: ColourConstants = {
    primaryColourLight: '#122448',
    secondaryColourLight: '#3F4E79',
    tertiaryColourLight: '#7B93C0',
    backgroundColourLight: '#CFD3DC',
    sidebarBackgroundColourLight: '#ECEFF7',
    primaryColourDark: '#9C562F',
    secondaryColourDark: '#C37448',
    tertiaryColourDark: '#FAE2C5',
    backgroundColourDark: '#D3B694',
    sidebarBackgroundColourDark: '#2D2927',
    whiteColour: '#FFFFFF',
    blackColour: '#000000',
}

export const ConstantsSlice = createSlice({
    name: 'constants',
    initialState,
    reducers: {},
})

export default ConstantsSlice.reducer;
export const { } = ConstantsSlice.actions;