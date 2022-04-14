-- Exercise 1 (done for you):
SELECT * FROM users;



-- Exercise 2 (done for you):
SELECT id, first_name, last_name 
FROM users;



-- Exercise 3
SELECT id, first_name, last_name
FROM users
ORDER BY last_name asc;

-- Exercise 4
select id, user_id, image_url
from posts
where user_id=26;


-- Exercise 5
select id, image_url, user_id
from posts
where user_id = 26 or user_id = 12;


-- Exercise 6
select count(*)
from posts;


-- Exercise 7
select user_id, count(*) from comments group by user_id
order by count(*) desc;


-- Exercise 8
SELECT posts.id, posts.image_url, posts.user_id, users.username, users.first_name, users.last_name
FROM posts
INNER JOIN users ON posts.user_id = users.id
WHERE posts.user_id = 26 or posts.user_id=12;

-- Exercise 9
SELECT posts.id, posts.pub_date, following.following_id
FROM posts
INNER JOIN following ON posts.user_id = following.following_id
WHERE following.user_id = 26;

-- Exercise 10
n/a



-- Exercise 11
insert into bookmarks (user_id, post_id)
values(26, 219);
insert into bookmarks (user_id, post_id)
values(26, 220);
insert into bookmarks (user_id, post_id)
values(26, 221);

-- Exercise 12
delete from bookmarks
where post_id = 219 and user_id = 26;
delete from bookmarks
where post_id = 220 and user_id = 26;
delete from bookmarks
where post_id = 221 and user_id = 26;

-- Exercise 13
update users
set email = 'knick2022@gmail.com'
where id=26;

-- Exercise 14
