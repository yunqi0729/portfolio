import { createSlice } from "@reduxjs/toolkit";

interface ColourConstants {
    primaryColourLight: string;
    secondaryColourLight: string;
    tertiaryColourLight: string;
    backgroundColourLight: string;
    primaryColourDark: string;
    secondaryColourDark: string;
    tertiaryColourDark: string;
    backgroundColourDark: string;
    whiteColour: string;
    blackColour: string;
}

const initialState: ColourConstants = {
    primaryColourLight: '#122448',
    secondaryColourLight: '#3F4E79',
    tertiaryColourLight: '#7B93C0',
    backgroundColourLight: '#CFD3DC',
    primaryColourDark: '#9C562F',
    secondaryColourDark: '#C37448',
    tertiaryColourDark: '#FAE2C5',
    backgroundColourDark: '#D3B694',
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