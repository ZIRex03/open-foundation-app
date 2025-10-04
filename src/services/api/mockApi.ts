import { ApiResponse } from "@/types/ApiResponse";
import { LeaderboardUser } from "@/types/User";
import { mockLeaderboardUsers } from "../mockData/leaderboardUsers";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const mockApi = {

    getLeaderBoard: async (): Promise<ApiResponse<LeaderboardUser[]>> => {
        await delay(600);
        return{
            success: true,
            data: mockLeaderboardUsers
        }
    }
}