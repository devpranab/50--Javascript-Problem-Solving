// total salary

let salaries = {
    pranab: 1500,
    rajav: 800,
    bhagida: 2000,
    nasif: 3200
}
/*
let sum = 0;
for (const key in salaries) {
 console.log(key, salaries[key]);
 sum = sum + salaries[key];
}
console.log("Total salary is " + sum);
*/


//2nd way to use of for of
let sum = 0;
for (const iter of Object.values(salaries)) {
 sum = sum + iter;
}
console.log("Total salary is " + sum);