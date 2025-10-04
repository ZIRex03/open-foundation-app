import { configureStore } from "@reduxjs/toolkit";

import userReducer from './slices/userSlice'
import dropPointsReducer from './slices/dropPointsSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        points: dropPointsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch