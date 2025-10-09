import { mockApi } from "@/services/api/mockApi";
import { LeaderboardUser, User } from "@/types/User";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface UserState {
    currentUser: User | null
    leaderboardUsers: LeaderboardUser[];
    leaderBoardLoading: boolean
    isLeaderBoardFetched: boolean
    userLoading: boolean
    error: string | null
    userError: string | null

}

const initialState: UserState = {
    currentUser: null,
    leaderboardUsers: [],
    leaderBoardLoading: false,
    isLeaderBoardFetched: false,
    userLoading: false,
    error: null,
    userError: null
}

export const fetchLeaderboardUsers = createAsyncThunk(
    'user/fetchLeaderboardUsers',
    async() => {
        const response = await mockApi.getLeaderBoard();
        return response.data
    }
)

export const fetchUserData = createAsyncThunk(
    "user/fetchUserData",
    async() => {
        const response = await mockApi.getUserData();
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
                state.leaderBoardLoading = true
                state.error = null
            })
            .addCase(fetchLeaderboardUsers.fulfilled, (state, {payload}) => {
                state.leaderBoardLoading = false
                state.leaderboardUsers = payload
                state.isLeaderBoardFetched = true
            })
            .addCase(fetchLeaderboardUsers.rejected, (state, action) => {
                state.leaderBoardLoading = false
                state.error = action.error.message || 'Ошибка запроса таблицы лидеров'
            })
            .addCase(fetchUserData.pending, (state) => {
                state.userLoading = true
                state.userError = null
            })
            .addCase(fetchUserData.fulfilled, (state, {payload}) => {
                state.userLoading = false
                state.currentUser = payload
            })
            .addCase(fetchUserData.rejected, (state, action) => {
                state.userLoading = false
                state.userError = action.error.message || 'Ошибка запроса данных пользователя'
            })
    }
})

export const {} = userSlice.actions
export default userSlice.reducer