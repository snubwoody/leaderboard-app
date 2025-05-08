import type { PostgrestError } from "@supabase/supabase-js";
import { supabase } from ".";
import type { Result } from "./error";


export type LeaderboardMember = {
    id: number, 
    player: string,
    player_alias: string | null,
    leaderboard: number
}

export type Leaderboard = {
    id: number,
    name: string,
    created_at:string,
    members: LeaderboardMember[]
}

export async function getLeaderboards(){
    const {data,error} = await supabase
        .from('leaderboard')
        .select('*, leaderboard_members(*)')

    if (!data){
        return {data,error}
    }

    const leaderboards = data.map(item => {
        let leaderboard: Leaderboard = {
            id: item.id,
            name: item.name,
            created_at: item.created_at,
            members: item.leaderboard_members
        };

        return leaderboard
    });

    return {data:leaderboards,error}
}


export async function createLeaderboard(
    name: string
): Promise<Result<Leaderboard,PostgrestError>>
{
    const {data,error} = await supabase
        .from('leaderboard')
        .insert({name})
        .select()
        .single();

    if (!data){
        return {
            data: null,
            error
        }
    }
    const leaderboard: Leaderboard = {
        id: data.id,
        name: data.name,
        created_at: data.created_at,
        members: []
    }

    return {data:leaderboard,error}
}