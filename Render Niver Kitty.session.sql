SELECT * FROM convidado;


SELECT* from acompanhante;
UPDATE convidado  SET nome_conv = 'Geovana Peres' WHERE id_conv = 5;


SELECT *
FROM acompanhante
WHERE fkconvidado IN (17, 18);

SELECT id_conv, nome_conv
FROM convidado
WHERE LOWER(nome_conv) = LOWER('Luciano dos Santos');

--Esse comando coloca '' nos nome para sabermos se tem espaço ou algo do genero
SELECT
    '"' || nome_conv || '"' AS nome,
    LENGTH(nome_conv) AS tamanho
FROM convidado
WHERE nome_conv ILIKE '%luciano%';

