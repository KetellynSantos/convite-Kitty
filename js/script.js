const acompanhante = document.querySelector(".dados-acompanhante");
const btnSolo = document.getElementById("btnSolo")
const btnCasal = document.getElementById("btnCasal")
const secao = document.querySelector(".confirmar-presenca")
const form = document.getElementById("formPresenca")



btnSolo.addEventListener("click", () => {
    acompanhante.classList.add("hidden")
    secao.classList.remove("hidden")
})

btnCasal.addEventListener("click", () => {
    secao.classList.remove("hidden")
    acompanhante.classList.remove("hidden")
})


form.addEventListener("submit", (event) => {
    //Impede o reload
     event.preventDefault()

const nome = document.getElementById("nome").value
const whatsapp = document.getElementById("whatsapp").value

const nomeAcompanhante = document.getElementById("nomeAcompanhante").value
const whatsappAcompanhante = document.getElementById("whatsappAcompanhante").value

const erroNome = document.getElementById("erroNome")
const inputNome = document.getElementById("nome")

const erroNomeAcomp = document.getElementById("erroNomeAcomp")
const inputNomeAcomp = document.getElementById("nomeAcompanhante")

const erroWhats =  document.getElementById("erroWhats")
const inputWhats = document.getElementById("whatsapp")

const erroWhatsAcomp =  document.getElementById("erroWhatsAcomp")
const inputWhatsAcomp = document.getElementById("whatsappAcompanhante")

const mensagemSucesso =
document.getElementById("mensagemSucesso")

console.log(nome)
console.log(whatsapp.length)

const convidado = {};

let formularioValido = true;

// VALIDAÇÕES DE NOME

if(nome.trim() !== "") {
   convidado.nome = nome;
   erroNome.classList.add("hidden")
   inputNome.classList.remove("input-error")
} else {
      erroNome.classList.remove("hidden")
      inputNome.classList.add("input-error")
      formularioValido = false
}

if(!acompanhante.classList.contains("hidden")) {

convidado.acompanhante = {}
if(nomeAcompanhante.trim() !== "") {
    convidado.acompanhante.nome = nomeAcompanhante;
   erroNomeAcomp.classList.add("hidden")
   inputNomeAcomp.classList.remove("input-error")

} else {

    erroNomeAcomp.classList.remove("hidden")
    inputNomeAcomp.classList.add("input-error")
    formularioValido = false
}

}

// VALIDAÇÕES DE NUMERO

if (whatsapp.length === 11) {
    convidado.whatsapp = whatsapp;
    erroWhats.classList.add("hidden")
    inputWhats.classList.remove("input-error")
} else {
    erroWhats.classList.remove("hidden")
    inputWhats.classList.add("input-error")
    formularioValido = false
}

if(!acompanhante.classList.contains("hidden")) {

convidado.acompanhante = {}
if(whatsappAcompanhante.length === 11) {
    convidado.acompanhante.whatsapp = whatsappAcompanhante;
    erroWhatsAcomp.classList.add("hidden")
    inputWhatsAcomp.classList.remove("input-error")
} else {
    erroWhatsAcomp.classList.remove("hidden")
    inputWhatsAcomp.classList.add("input-error")
    formularioValido = false
}

}

console.log(whatsapp)
console.log("Quantidade de num no zap: " + whatsapp.length)
console.log("Quantidade de num no zap do acompanhante: " + whatsappAcompanhante.length)


if(formularioValido) {
    setTimeout(() => {

        console.log(convidado)

        form.reset()

        acompanhante.classList.add("hidden")

        secao.classList.add("hidden")

        mensagemSucesso.classList.remove("hidden")

    }, 1000)
}

/* O JSOM visualmente
 const convidado = {
    
        nome: nome,
    
        whatsapp: whatsapp,
    
        acompanhante: {
    
            nome: nomeAcompanhante,
    
            whatsapp: whatsappAcompanhante
        }
    }
*/
})


