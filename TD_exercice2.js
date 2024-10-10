let student = {
    Name : "Marie",
    age : 20,
    courses : []

}
student.age = 21;
student.grade = "A";
student.courses.push("Math", "Physics", "Chemistry")
let index = student.courses.indexOf('Physics');
let slice = student.courses.slice(1, 3);
console.log(student);
console.log(index);
console.log(slice);