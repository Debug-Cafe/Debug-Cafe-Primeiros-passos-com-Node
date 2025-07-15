// Exercícios de operações matemáticas

// Operações básicas
const a = 10;
const b = 3;

console.log("Adição:", a + b);
console.log("Subtração:", a - b);
console.log("Multiplicação:", a * b);
console.log("Divisão:", a / b);
console.log("Módulo (resto):", a % b);
console.log("Exponenciação:", a ** b);

// Incremento e decremento
let counter = 5;
console.log("Valor inicial:", counter);
console.log("Pós-incremento:", counter++);
console.log("Novo valor:", counter);
console.log("Pré-incremento:", ++counter);
console.log("Valor final:", counter);

// Conversão de tipos
const numberAsString = "42";
console.log("String original:", numberAsString, typeof numberAsString);

const convertedNumber = Number(numberAsString);
console.log("Depois de converter:", convertedNumber, typeof convertedNumber);

/* Desafios

a) Calcule a média dos números 15, 25 e 38
b) Converta a string "123.45" em um número
c) Arredonde o resultado de 9.7 dividido por 2 para o inteiro mais próximo
*/