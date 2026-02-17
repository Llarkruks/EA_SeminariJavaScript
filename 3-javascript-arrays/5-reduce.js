import { students } from "./0-data.js";

const points = [10, 20, 30, 40, 50];

let total1 = 0;
for (let i = 0; i < points.length; i++) {
  total1 += points[i];
}

const total2 = points.reduce((total, point) => total + point, 0)  ;

const result = students.reduce(function (allSkills, student) {
  return Array.from(new Set([...allSkills, student.course]));
}, []);

console.log(result); 
