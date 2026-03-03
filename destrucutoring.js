const pessoa = {
    nome: 'Saulo',
    idade: 49,
    profissao: "Desenvolvedor"
}

const { nome, idade } = pessoa

console.log(nome)
console.log(idade)

function saudacao({ nome }) {
    console.log('Olá,', nome)
}

saudacao(pessoa)