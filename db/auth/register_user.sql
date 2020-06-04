INSERT INTO users_example
    (username, hash)
VALUES
    ($1, $2)
RETURNING user_id, username;