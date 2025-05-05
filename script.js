function calculateGrade() {
    let marks = [];
    
    for (let i = 1; i <= 5; i++) {
        let subjectMarks = parseFloat(document.getElementById(`subject${i}`).value);
        if (isNaN(subjectMarks) || subjectMarks < 0 || subjectMarks > 100) {
            alert("Please enter valid marks between 0 and 100.");
            return;
        }
        marks.push(subjectMarks);
    }

    let total = marks.reduce((a, b) => a + b, 0);
    let average = total / marks.length;
    let grade = "";

    if (average >= 90) grade = "A+";
    else if (average >= 80) grade = "A";
    else if (average >= 70) grade = "B";
    else if (average >= 60) grade = "C";
    else if (average >= 50) grade = "D";
    else grade = "F";

    document.getElementById("totalMarks").textContent = `Total Marks: ${total}`;
    document.getElementById("averageMarks").textContent = `Average Marks: ${average.toFixed(2)}`;
    document.getElementById("grade").textContent = `Grade: ${grade}`;
}
