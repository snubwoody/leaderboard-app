import { test,expect } from "vitest";
import { supabase } from "../lib";

test('Create new leaderboard',async()=>{
    const {data:{user},error:signInError} = await supabase.auth.signInAnonymously();
    
    const {data,error} = await supabase
        .from('leaderboard')
        .insert({"name":"My leaderboard"})
        .select()
        .single()
    
    console.log(data)
    
    const {error:insertError} = await supabase.from('leaderboard_members').insert({
        leaderboard:data?.id ?? 2, // FIXME
        player:user?.id ??''
    })

    console.log(insertError)
        
    // console.log(error)
})