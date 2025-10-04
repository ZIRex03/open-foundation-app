import { mockApi } from "@/services/api/mockApi";
import { LeaderboardUser } from "@/types/User";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface UserState {
    leaderboardUsers: LeaderboardUser[];
    loading: boolean
    error: string | null
}

const initialState: UserState = {
    leaderboardUsers: [],
    loading: false,
    error: null
}

export const fetchLeaderboardUsers = createAsyncThunk(
    'user/fetchLeaderboardUsers',
    async() => {
        const response = await mockApi.getLeaderBoard();
        return response.data
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLeaderboardUsers.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchLeaderboardUsers.fulfilled, (state, {payload}) => {
                state.loading = false
                state.leaderboardUsers = payload
            })
            .addCase(fetchLeaderboardUsers.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message || 'Ошибка запроса таблицы лидеров'
            })
    }
})

export const {} = userSlice.actions
export default userSlice.reducer