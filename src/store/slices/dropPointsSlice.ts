import { mockApi } from "@/services/api/mockApi";
import { Points } from "@/types/Points";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface PointsState {
    dropPoints: Points | null;
    loading: boolean
    error: string | null
}

const initialState: PointsState = {
    dropPoints: null,
    loading: false,
    error: null
}

export const fetchDropPoints = createAsyncThunk(
    'points/fetchDropPoints',
    async() => {
        const response = await mockApi.getDropPoints();
        return response.data
    }
)

const dropPointsSlice = createSlice({
    name: 'points',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDropPoints.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchDropPoints.fulfilled, (state, {payload}) => {
                state.loading = false
                state.dropPoints = payload
            })
            .addCase(fetchDropPoints.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message || 'Ошибка запроса очков'
            })
    }
})

export const {} = dropPointsSlice.actions
export default dropPointsSlice.reducer