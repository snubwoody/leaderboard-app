import { test,expect } from "vitest";
import { supabase } from "../lib";
import { createLeaderboard, getLeaderboards } from "../lib/leaderboard";

test('Create new leaderboard',async()=>{
    let {data:leaderboard,error} = await createLeaderboard('');
    
    expect(error).toBe(null)
    expect(leaderboard).not.toBe(null)

    let {data,error:selectError} = await supabase
        .from('leaderboard')
        .select('*')
        .eq('id',leaderboard?.id ?? 0)
        .single();

    expect(selectError).toBe(null)
    expect(data?.name).toBe(leaderboard?.name)
});

test('Get leaderboards',async()=>{
    const {error} = await getLeaderboards();
    expect(error).toBe(null)
});