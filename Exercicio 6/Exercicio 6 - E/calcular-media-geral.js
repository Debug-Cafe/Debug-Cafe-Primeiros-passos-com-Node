// Calcule a média geral da turma
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
        average: parseFloat(average.toFixed(2)) 
    };
});

const totalAverageSum = studentAverages.reduce((sum, student) => sum + student.average, 0);

const overallClassAverage = totalAverageSum / studentAverages.length;

console.log(`A média geral da turma é: ${overallClassAverage.toFixed(2)}.`);