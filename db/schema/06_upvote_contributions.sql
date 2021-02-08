-- Drop and recreate Upvote Contribution table

DROP TABLE IF EXISTS upvote_contribution CASCADE;
CREATE TABLE upvote_contribution (
  id SERIAL PRIMARY KEY NOT NULL,
  -- change story_id to user_id in erd --
  user_id INTEGER REFERENCES users(id),
  contribution_id INTEGER REFERENCES contributions(id)
);
