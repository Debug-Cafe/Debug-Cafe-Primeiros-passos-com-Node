# Debug Cafe Primeiros passos com Node

Primeiros passos com Node, exercícios de fixação relacionados ao programa Desenvolve Boticario

# Exercícios de Introdução ao Node.js

## Exercício 1: Primeiros Passos com Node.js

**Objetivo:** Verificar a instalação do Node.js e executar o primeiro script.

### Passos:

1. Crie um arquivo `hello.js` com o seguinte conteúdo:

```javascript
// Meu primeiro script Node.js
console.log("Hello, Node.js!");
console.log("Node.js version:", process.version);
console.log("Current directory:", process.cwd());
```

2. Execute o arquivo no terminal:

```bash
node hello.js
```

---

## Exercício 2: Manipulação de Strings

**Objetivo:** Praticar operações básicas com strings.

### Crie um arquivo `strings.js`:

```javascript
// Exercícios de manipulação de strings

// 1. Declaração e concatenação
const firstName = "Maria";
const lastName = "Silva";
const fullName = firstName + " " + lastName;
console.log("Nome completo:", fullName);

// 2. Template strings (ES6)
const greeting = `Olá, meu nome é ${firstName} ${lastName}!`;
console.log(greeting);

// 3. Propriedades e métodos de strings
console.log("Comprimento do nome:", fullName.length);
console.log("Nome em maiúsculas:", fullName.toUpperCase());
console.log("Nome em minúsculas:", fullName.toLowerCase());
```

### Desafios:

* a) Extraia o primeiro nome usando o método `slice` ou `substring`
* b) Verifique se o nome completo contém a letra 'a'
* c) Substitua "Silva" por outro sobrenome usando `replace`

---

## Exercício 3: Operações Matemáticas

**Objetivo:** Praticar operações matemáticas e conversão de tipos.

### Crie um arquivo `math.js`:

```javascript
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
```

### Desafios:

* a) Calcule a média dos números 15, 25 e 38
* b) Converta a string "123.45" em um número
* c) Arredonde o resultado de 9.7 dividido por 2 para o inteiro mais próximo

---

## Exercício 4: Estruturas Condicionais

**Objetivo:** Praticar o uso de if/else e operadores lógicos.

### Crie um arquivo `conditionals.js`:

```javascript
// Exercícios com estruturas condicionais

// Verificação de idade
const age = 17;
if (age >= 18) {
    console.log("Você é maior de idade!");
} else {
    console.log("Você é menor de idade!");
}

// Verificação com múltiplas condições
const hour = 14;
if (hour < 12) {
    console.log("Bom dia!");
} else if (hour < 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}

// Operadores lógicos
const isWeekend = false;
const isHoliday = true;
if (isWeekend || isHoliday) {
    console.log("Não precisa trabalhar hoje!");
} else {
    console.log("Dia de trabalho!");
}

// Operador ternário
const status = age >= 18 ? "Adulto" : "Menor";
console.log("Status:", status);
```

### Desafios:

* a) Sistema de classificação de notas:

  * 0-59: F
  * 60-69: D
  * 70-79: C
  * 80-89: B
  * 90-100: A
* b) Verifique se um número é par ou ímpar
* c) Verifique se uma pessoa pode dirigir (idade >=18 e possuir habilitação)

---

## Exercício 5: Loops

**Objetivo:** Praticar diferentes tipos de loops.

### Crie um arquivo `loops.js`:

```javascript
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
```

### Desafios:

* a) Tabuada do 7 (1 a 10)
* b) Soma de números em um array
* c) Encontrar o menor valor em um array

---

## Exercício 6: Desafio Integrador

**Objetivo:** Aplicar todos os conceitos aprendidos.

### Crie um arquivo `final-challenge.js`:

```javascript
// Dados dos alunos
const students = [
    { name: "João", age: 20, grades: [85, 90, 78] },
    { name: "Maria", age: 19, grades: [92, 95, 89] },
    { name: "Pedro", age: 21, grades: [70, 65, 80] },
    { name: "Ana", age: 18, grades: [60, 75, 68] },
    { name: "Carlos", age: 22, grades: [90, 88, 92] }
];
```

### Desafios:

* a) Calcule a média das notas de cada aluno
* b) Determine quem foi aprovado (média >= 70)
* c) Conte alunos aprovados e reprovados
* d) Encontre o aluno com maior média
* e) Calcule a média geral da turma
