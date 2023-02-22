CREATE VIEW search AS
SELECT name, kind_id FROM synonyms
UNION
SELECT name, id FROM kinds
ORDER BY 1;