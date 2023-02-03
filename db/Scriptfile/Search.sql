SELECT "name" FROM kinds
WHERE "name" = ?
UNION SELECT "name" FROM "synonym"
WHERE "name" = ?;
