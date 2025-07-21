const studentAverages = students.map(student => {
    const total = student.grades.reduce((sum, grade) => sum + grade, 0);
    const average = total / student.grades.length;
    return {
        name: student.name,
        average: average.toFixed(2) // Arredondando para 2 casas decimais
    };
});

// Exibir os resultados
console.log("Médias dos alunos:");
studentAverages.forEach(student => {
    console.log(`${student.name}: ${student.average}`);
});
// Exibir os resultados
console.log("Médias dos alunos:");
studentAverages.forEach(student => {
    console.log(`${student.name}: ${student.average}`);
});
