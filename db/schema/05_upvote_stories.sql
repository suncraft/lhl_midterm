-- Drop and recreate Upvote Stories table

DROP TABLE IF EXISTS upvote_stories CASCADE;
CREATE TABLE upvote_stories (
  id SERIAL PRIMARY KEY NOT NULL,
  story_id INTEGER REFERENCES stories(id),
  user_id INTEGER REFERENCES users(id)
);
