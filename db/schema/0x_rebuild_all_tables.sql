DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS stories CASCADE;
DROP TABLE IF EXISTS contributions CASCADE;
DROP TABLE IF EXISTS accepted_story_contributions CASCADE;
DROP TABLE IF EXISTS upvote_stories CASCADE;
DROP TABLE IF EXISTS upvote_contribution CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE stories (
  id SERIAL PRIMARY KEY NOT NULL,
  cretor_id INTEGER REFERENCES users(id),
  story_title VARCHAR(255) NOT NULL,
  story_beginning VARCHAR NOT NULL,
  is_complete BOOLEAN NOT NULL,
  cover_photo_url VARCHAR(255)
);

CREATE TABLE contributions (
  id SERIAL PRIMARY KEY NOT NULL,
  story_id INTEGER REFERENCES stories(id),
  contribution VARCHAR NOT NULL,
  user_id INTEGER REFERENCES users(id)
);

CREATE TABLE accepted_story_contributions (
  id SERIAL PRIMARY KEY NOT NULL,
  story_id INTEGER REFERENCES stories(id),
  contribution_id INTEGER REFERENCES contributions(id)
);

CREATE TABLE upvote_stories (
  id SERIAL PRIMARY KEY NOT NULL,
  story_id INTEGER REFERENCES stories(id),
  user_id INTEGER REFERENCES users(id)
);

CREATE TABLE upvote_contribution (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id),
  contribution_id INTEGER REFERENCES contributions(id)
);
