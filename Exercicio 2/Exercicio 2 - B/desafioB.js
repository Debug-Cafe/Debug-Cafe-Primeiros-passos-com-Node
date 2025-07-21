// Verificando se o nome completo contém a letra 'a'
// Para testar a funcionalidade do código altere o nome na variável fullName ou letra

let fullName = "Maria Silva";
let letra = "a";

if (fullName.toLowerCase().includes(letra.toLowerCase())) {
    console.log(`O nome "${fullName}" possui a letra "${letra}"`)
} else {
    console.log(`O nome "${fullName}" não possui a letra ${letra}`)
}
