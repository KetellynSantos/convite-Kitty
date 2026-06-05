require("dotenv").config();

// Para usar uma biblioteca instalada pelo npm, usamos esse comando no início do arquivo
// const mysql = require("mysql2");

const { Pool } = require("pg");

const conexao = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    ssl: {
        rejectUnauthorized: false
    }
});

// lqx1huguLzVacgntV53pwhSV5uEfkggV

/*
const conexao = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
});
*/

module.exports = conexao;