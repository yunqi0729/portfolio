import { configureStore } from '@reduxjs/toolkit';
import constantsReducer from './constantsSlice';
import modeReducer from './modeSlice';

const store = configureStore({
    reducer: {
        constants: constantsReducer,
        mode: modeReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;