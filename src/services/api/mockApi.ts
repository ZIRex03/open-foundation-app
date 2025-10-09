import { ApiResponse } from "@/types/ApiResponse";
import { LeaderboardUser, User } from "@/types/User";
import { mockLeaderboardUsers } from "../mockData/leaderboardUsers";
import { Points } from "@/types/Points";
import { mockDropPoints } from "../mockData/dropPoints";
import { mockUserData } from "../mockData/userData";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const mockApi = {

    getLeaderBoard: async (): Promise<ApiResponse<LeaderboardUser[]>> => {
        await delay(600);
        return{
            success: true,
            data: mockLeaderboardUsers
        }
    },

    getDropPoints: async (): Promise<ApiResponse<Points>> => {
        await delay(600);
        return{
            success: true,
            data: mockDropPoints
        }
    },

    getUserData: async (): Promise<ApiResponse<User>> => {
        await delay(400);
        return {
            success: true,
            data: mockUserData
        }
    }
}