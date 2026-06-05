CREATE DATABASE niverKitty;
use niverKitty;

create table convidado (
id_conv INT primary key auto_increment,
nome_conv varchar(45),
tel_conv char(15)
);

create table acompanhante (
id_acom int primary key auto_increment,
nome_acom varchar(45),
tel_acom char(15),
fkconvidado int,
foreign key (fkconvidado) references convidado(id_conv)
);

SHOW TABLES;

SET FOREIGN_KEY_CHECKS = 0;           -- 1. Desativa a checagem de chaves estrangeiras
TRUNCATE TABLE convidado;  

DELETE FROM convidado;              -- 2. Limpa a tabela e reseta o AUTO_INCREMENT
SET FOREIGN_KEY_CHECKS = 1; 

select *  from convidado;
select *  from acompanhante;

DELETE FROM convidado WHERE id_conv = 1;

DROP DATABASE niverKitty;

select c.nome_conv, a.nome_acom from convidado c left join acompanhante as a on a.fkconvidado = c.id_conv;

SELECT id_conv, nome_conv
FROM convidado;

DELETE FROM acompanhante;
DELETE FROM convidado;

TRUNCATE TABLE acompanhante;
TRUNCATE TABLE convidado;
