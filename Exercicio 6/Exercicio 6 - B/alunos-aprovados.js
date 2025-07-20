// Determine quem foi aprovado (média >= 70)
const students = [
    { name: "João", age: 20, grades: [85, 90, 78] },
    { name: "Maria", age: 19, grades: [92, 95, 89] },
    { name: "Pedro", age: 21, grades: [70, 65, 80] },
    { name: "Ana", age: 18, grades: [60, 75, 68] },
    { name: "Carlos", age: 22, grades: [90, 88, 92] }
];

const studentAverages = students.map(student => {
    const total = student.grades.reduce((sum, grade) => sum + grade, 0);
    const average = total / student.grades.length;
    return {
        name: student.name,
        average: average.toFixed(2)
    };
});

console.log("Médias dos alunos:");
studentAverages.forEach(student => {
    console.log(`${student.name}: ${student.average}`);
});

console.log("\n--- Alunos Aprovados ---");
const approvedStudents = studentAverages.filter(student => parseFloat(student.average) >= 70);
approvedStudents.forEach(student => {
    console.log(`${student.name} foi APROVADO(a) com média ${student.average}.`);
});