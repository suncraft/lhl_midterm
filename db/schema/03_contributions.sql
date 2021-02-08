-- Drop and recreate Contributions table

DROP TABLE IF EXISTS contributions CASCADE;
CREATE TABLE contributions (
  id SERIAL PRIMARY KEY NOT NULL,
  story_id INTEGER REFERENCES stories(id),
  contribution VARCHAR(255) NOT NULL,
  user_id INTEGER REFERENCES users(id)
);
