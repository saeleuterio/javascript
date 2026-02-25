// function saudacao(nome) { // Nome é um parametro da função saudação
//   console.log("Olá,", nome);
// }

// const saudacao = (nome) => {
//     console.log('Vida longa e próspera,', nome)
// }

const saudacao = (nome) => console.log("Olá,", nome);

saudacao("Saulo"); // Saulo é o "argumento"
saudacao("Kelly");
saudacao("Giulia");

// function calcularDobroDeUm(numero) {
//   return numero * 2;
// }

// const calcularDobroDeUm = (numero) => {
//     return numero * 2
// }

const calcularDobroDeUm = (numero) => numero * 2;

const numeroDobrado = calcularDobroDeUm(4);
console.log("O dobro de 4 é:", numeroDobrado);

console.log("oi", "tudo", "bem", "?");
