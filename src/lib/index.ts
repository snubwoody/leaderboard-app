import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";
import { AuthClient } from "../generated/auth.client";
import { Empty } from "../generated/common";

export const api = "http://localhost:5000"

export type Leaderboard = {
    id: number,
    name: string
}

export const getLeaderBoards = async() => {
    const response = await fetch(`${api}/api/v1/leaderboards`);
    const leaderboards: Leaderboard[] = await response.json() 
    return leaderboards
}

export const transport = new GrpcWebFetchTransport({
    baseUrl: "http://localhost:5000"
})
let client = new AuthClient(transport);

export {
    client
};

