export interface User {
    id: number
    username: string
    avatar: string
    points: number
    rank: number
}

export interface LeaderboardUser {
    id: number
    username: string
    avatar: string
    amount: number
}