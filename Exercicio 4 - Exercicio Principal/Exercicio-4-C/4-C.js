//Usei constante por usar informações fixas em relação a idade da pessoa e com isso as informações da situação da habilitação.
const idade = 25;
const temHabilitacao = true;

if (idade >= 18 && temHabilitacao) {
    console.log("Você pode dirigir 🚗✅");
} else {
    console.log("Você não pode dirigir ❌");
}