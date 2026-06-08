console.log("Página de confirmados carregada");

const totalConfirmados =
document.getElementById("totalConfirmados");

const listaConvidados =
document.getElementById("listaConvidados");

console.log(listaConvidados);

fetch("/convidados")
    .then(resposta => resposta.json())
    .then(dados => {

        totalConfirmados.textContent =
        `${dados.length} CONFIRMADOS`;

        dados.forEach(convidado => {

            const card =
            document.createElement("div");

            card.classList.add("card-convidado");

            card.textContent =
            convidado.nome_conv;

            listaConvidados.appendChild(card);

             if(convidado.nome_acom){

        const cardAcompanhante =
        document.createElement("div");

        cardAcompanhante.classList.add("card-convidado");

        cardAcompanhante.textContent =
        convidado.nome_acom;

        listaConvidados.appendChild(cardAcompanhante);

    }

        });

    });