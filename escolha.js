// Entre 9 e 10: Excelente
// Entre 7 e 8: Bom
// Entre 4 e 6: Médio
// Entre 0 e 3: Ruim

const notaDoAluno = 9;

switch (notaDoAluno) {
  case 10:
  case 9:
    console.log("Excelente");
    break;
  case 8:
  case 7:
    console.log("Bom");
    break;
  case 6:
  case 5:
  case 4:
    console.log("Mediano");
    break;
  case 3:
  case 2:
  case 1:
  case 0:
    console.log("Ruim");
    break;
}
