CREATE TABLE users_example (user_id SERIAL PRIMARY KEY, username VARCHAR(50), hash VARCHAR(300));
CREATE TABLE movies (movie_id SERIAL PRIMARY KEY, movie_name VARCHAR(50), movie_rating INTEGER);