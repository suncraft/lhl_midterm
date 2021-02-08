-- Drop and recreate Accepted Story Contributions table

DROP TABLE IF EXISTS accepted_story_contributions CASCADE;
CREATE TABLE accepted_story_contributions (
  id SERIAL PRIMARY KEY NOT NULL,
  story_id INTEGER REFERENCES stories(id),
  contribution_id INTEGER REFERENCES contributions(id)
);
