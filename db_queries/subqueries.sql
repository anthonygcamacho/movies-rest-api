-- Uncorrelated Subqueries Part 1

SELECT movie_name, movie_length FROM movies 
WHERE movie_length > 
(SELECT AVG(movie_length) FROM movies);

SELECT movie_name, movie_length FROM movies 
WHERE movie_length > 126.13;

SELECT AVG(movie_length) FROM movies;


SELECT first_name, last_name, date_of_birth FROM directors 
WHERE date_of_birth >
(SELECT date_of_birth FROM actors 
WHERE first_name = 'Tom'
AND last_name = 'Cruise');

SELECT date_of_birth FROM actors 
WHERE first_name = 'Tom'
AND last_name = 'Cruise';

-- Uncorrelated Subqueries Part 2 


SELECT movie_name FROM movies 
WHERE movie_id IN
(SELECT movie_id FROM movie_revenues
WHERE international_takings > domestic_takings);

SELECT mo.movie_id, mo.movie_name, d.first_name, d.last_name FROM movies mo 
JOIN directors d ON mo.director_id = d.director_id
WHERE mo.movie_id IN
(SELECT movie_id FROM movie_revenues
WHERE international_takings > domestic_takings);

-- Correlated Subqueries 

SELECT d1.first_name, d1.last_name, d1.date_of_birth 
FROM directors d1
WHERE d1.date_of_birth = 
(SELECT MIN(date_of_birth) FROM directors d2
WHERE d2.nationality = d1.nationality);

SELECT MIN(date_of_birth) FROM directors d2
WHERE d2.nationality = d1.nationality;

SELECT mo1.movie_name, mo1.movie_lang, mo1.movie_length FROM movies mo1
WHERE mo1.movie_length = 
(SELECT MAX(movie_length) FROM movies mo2
WHERE mo2.movie_lang = mo1.movie_lang);