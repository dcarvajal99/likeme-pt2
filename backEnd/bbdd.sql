CREATE DATABASE likeme;
CREATE TABLE posts (id SERIAL, titulo VARCHAR(25), img VARCHAR(1000),descripcion VARCHAR(255), likes INT);
INSERT INTO posts
 values (DEFAULT, 'hola', 'https://w7.pngwing.com/pngs/59/451/png-transparent-text-comics-speech-balloon-drawing-%C2%A1hola-comic-bubbles-comics-text-logo-thumbnail.png', 'hola', '1');

UPDATE posts
    SET likes = 0
    where likes = 1
    AND id = 1;

DELETE FROM posts
    where id = ;

SELECT * FROM posts;