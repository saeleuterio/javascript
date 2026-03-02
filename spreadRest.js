const saulo1 = {
  nome: "Saulo",
  idade: 49,
  profissao: "Desenvolvedor",
};

const saulo2 = { ...saulo1 };

saulo2.idade = 50;

console.log(saulo1);
console.log(saulo2);

saulo1 = {
  ...saulo2,
  profissao: "Desenvolvedor Senior",
  possuiCNH: true,
};

console.log(saulo1);

const { nome, ...restante } = saulo1

console.log(nome)
console.log(restante)