CREATE USER 'referer'@'localhost' IDENTIFIED BY 'referer_pass';

GRANT SELECT ON main_db.* TO referer@localhost;

FLUSH PRIVILEGES;