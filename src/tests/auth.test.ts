import {test} from 'vitest';
import { client } from '../lib';
import { Empty } from '../generated/common';

test('Create anon user',async () => {
    let user = await client.signInAnonymously(Empty).response;
    console.log(user)
})