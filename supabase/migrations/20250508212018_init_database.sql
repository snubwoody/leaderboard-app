
CREATE TABLE profiles(
    id UUID PRIMARY KEY REFERENCES auth.users(id)
);

CREATE TABLE leaderboard(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL DEFAULT 'My leaderboard',
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE leaderboard_members(
    id SERIAL PRIMARY KEY,
    leadboard BIGINT NOT NULL REFERENCES leaderboard(id),
    player UUID NOT NULL REFERENCES profiles(id),
    player_alias TEXT NULL 
);

CREATE TABLE points(
    id SERIAL PRIMARY KEY,
    value NUMERIC(6,2) NOT NULL,
    leaderboard BIGINT NOT NULL REFERENCES leaderboard(id),
    player UUID NOT NULL REFERENCES profiles(id),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);