const nota = 85; // Essa é uma contante com uma nota para testar se a classificação irá funcionar da forma esperada.
let classificação;

if (nota >= 90 && nota <=100) {
    classificação = "A 🏆";
} else if (nota >= 80 && nota < 89) {
    classificação = "B ⭐";
} else if (nota >= 70 && nota <= 79) {
    classificação = "C 🙂";
} else if (nota >= 60 && nota <= 69) {
    classificação = "D 🤔";
} else if (nota >= 0 && nota <= 59) {
    classificação = "F 😞";
} else {
    classificação = "Nota Inválida!❌"
}

console.log("classificação:", classificação);