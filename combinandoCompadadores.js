const idade = 18;
const maiorDeIdade = idade >= 18;
const possuiCnh = false;

const podeDirigir = maiorDeIdade && possuiCnh; // AND

console.log("Pode dirigir? ", podeDirigir);

const podeViajarSozinha = maiorDeIdade || possuiCnh; // OR

console.log("Pode viajar sozinha? ", podeViajarSozinha);

const precisaDeAcompanhante = !maiorDeIdade;

console.log("Precisa de acompanhante? ", precisaDeAcompanhante);

// AND &&
// OR ||
// NOT !
