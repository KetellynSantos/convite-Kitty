const conexao = require("./db/conexao");

const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());
// Permite receber JSON
app.use(express.json());

// SERVE ARQUIVOS DA PASTA PUBLIC - para acessar no Render
app.use(express.static("public"));

// Teste de conexão com banco
/*
conexao.connect((erro) => {

    if (erro) {
        console.log("Erro ao conectar:");
        console.log(erro);
    } else {
        console.log("Banco conectado com sucesso!");
    }

});
app.post("/convidados", (req, res) => {

    const { nome, whatsapp, acompanhante } = req.body;

    const sqlConvidado = `
        INSERT INTO convidado
        (nome_conv, tel_conv)
        VALUES (?, ?)
    `;

    conexao.query(
        sqlConvidado,
        [nome, whatsapp],
        (erro, resultado) => {

            if (erro) {
                console.log(erro);

                return res.status(500).json({
                    mensagem: "Erro ao salvar convidado"
                });
            }

            // ID criado pelo MySQL
            const idConvidado = resultado.insertId;

            console.log("ID GERADO:", idConvidado);

            // Se não tiver acompanhante
            if (!acompanhante) {

                return res.status(201).json({
                    mensagem: "Convidado cadastrado"
                });

            }

            const sqlAcompanhante = `
                INSERT INTO acompanhante
                (nome_acom, tel_acom, fkconvidado)
                VALUES (?, ?, ?)
            `;

            conexao.query(
                sqlAcompanhante,
                [
                    acompanhante.nome,
                    acompanhante.whatsapp,
                    idConvidado
                ],
                (erroAcomp) => {

                    if (erroAcomp) {
                        console.log(erroAcomp);

                        return res.status(500).json({
                            mensagem: "Erro ao salvar acompanhante"
                        });
                    }

                    res.status(201).json({
                        mensagem: "Convidado e acompanhante cadastrados"
                    });

                }
            );

        }
    );

});


app.get("/convidados", (req, res) => {
const sql = `
SELECT id_conv, nome_conv
FROM convidado
`;
 conexao.query(
        sql,
        (erro, resultado) => {

            if (erro) {

                console.log(erro);

                return res.status(500).json({
                    mensagem: "Erro ao buscar convidados"
                });

            }

            res.status(200).json(resultado);

        }
    );

});

*/

conexao.connect()
    .then(() => {
        console.log("Banco conectado com sucesso!");
    })
    .catch((erro) => {
        console.log("Erro ao conectar:");
        console.log(erro);
    });

    app.post("/convidados", async (req, res) => {

    try {

        const { nome, whatsapp, acompanhante } = req.body;

        const resultadoConvidado = await conexao.query(
            `
            INSERT INTO convidado
            (nome_conv, tel_conv)
            VALUES ($1, $2)
            RETURNING id_conv
            `,
            [nome, whatsapp]
        );

        const idConvidado = resultadoConvidado.rows[0].id_conv;

        if (!acompanhante) {

            return res.status(201).json({
                mensagem: "Convidado cadastrado"
            });

        }

        await conexao.query(
            `
            INSERT INTO acompanhante
            (nome_acom, tel_acom, fkconvidado)
            VALUES ($1, $2, $3)
            `,
            [
                acompanhante.nome,
                acompanhante.whatsapp,
                idConvidado
            ]
        );

        res.status(201).json({
            mensagem: "Convidado e acompanhante cadastrados"
        });

    } catch (erro) {

        console.log(erro);

        res.status(500).json({
            mensagem: "Erro ao salvar dados"
        });

    }

});

app.get("/convidados", async (req, res) => {

    try {

        const resultado = await conexao.query(`
            SELECT id_conv, nome_conv
            FROM convidado
        `);

        res.status(200).json(resultado.rows);

    } catch (erro) {

        console.log(erro);

        res.status(500).json({
            mensagem: "Erro ao buscar convidados"
        });

    }

});

// Rota para receber os dados do formulário


const PORT = process.env.PORT || 3000;

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});