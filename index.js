let nome = "Fulano";
let quantidadeXP = 1001;
let nivel = "";
let valorValido = true;

let xpFerro = quantidadeXP >= 0 && quantidadeXP <= 1000;
let xpBronze = quantidadeXP > 1000 || quantidadeXP <= 2000;
let xpPrata = quantidadeXP > 2000 || quantidadeXP <= 5000;
let xpOuro = quantidadeXP > 5000 || quantidadeXP <= 7000;
let xpPlatina = quantidadeXP > 7000 || quantidadeXP <= 8000;
let xpAscendente = quantidadeXP > 8000 || quantidadeXP <= 9000;
let xpImortal = quantidadeXP > 9000 || quantidadeXP <= 10000;
let xpRadiante = quantidadeXP > 10000;

do {
  if (quantidadeXP < 0) {
    console.log("Valores não correspondem ao requisitado ou são inválidos!");
    valorValido = false;
  } else if (xpFerro) {
    nivel = "Ferro";
    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
    valorValido = false;
  } else if (xpBronze) {
    nivel = "Bronze";
    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
    valorValido = false;
  } else if (xpPrata) {
    nivel = "Prata";
    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
    valorValido = false;
  } else if (xpOuro) {
    nivel = "Ouro";
    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
    valorValido = false;
  } else if (xpPlatina) {
    nivel = "Platina";
    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
    valorValido = false;
  } else if (xpAscendente) {
    nivel = "Ascendente";
    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
    valorValido = false;
  } else if (xpImortal) {
    nivel = "Imortal";
    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
    valorValido = false;
  } else if (xpRadiante) {
    nivel = "Radiante";
    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
    valorValido = false;
  } else {
    console.log("Valores não correspondem ao requisitado ou são inválidos!");
    valorValido = false;
  }
} while (valorValido);
