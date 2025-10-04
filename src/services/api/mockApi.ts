import { ApiResponse } from "@/types/ApiResponse";
import { LeaderboardUser } from "@/types/User";
import { mockLeaderboardUsers } from "../mockData/leaderboardUsers";
import { Points } from "@/types/Points";
import { mockDropPoints } from "../mockData/dropPoints";

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
    }
}