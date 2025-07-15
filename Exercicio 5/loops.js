// Exercícios com loops

console.log("Contando de 1 a 5:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

console.log("\nLoop com break:");
for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        console.log("Encontrei o 6, parando o loop!");
        break;
    }
    console.log(i);
}

console.log("\nPulando números pares:");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) continue;
    console.log(i);
}

const fruits = ["Maçã", "Banana", "Laranja", "Manga", "Uva"];
console.log("\nLista de frutas:");
for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruta ${i+1}: ${fruits[i]}`);
}

/* Desafios

a) Tabuada do 7 (1 a 10)
b) Soma de números em um array
c) Encontrar o menor valor em um array
*/