-- Drop and recreate Stories table

DROP TABLE IF EXISTS stories;
CREATE TABLE stories (
  id SERIAL PRIMARY KEY NOT NULL,
  cretor_id INTEGER REFERENCES users(id),
  story_title VARCHAR(255) NOT NULL,
  story_beginning VARCHAR(255) NOT NULL,
  is_complete BOOLEAN NOT NULL,
  cover_photo_url VARCHAR(255)
);
