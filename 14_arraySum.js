// array sum

let arraySum = [10, 4, 2, 8, 32, 7, 3];

let sum = 0;
for(let i = 0; i<arraySum.length; i++){
    let element = arraySum[i];
    sum = sum + element;
}
console.log("total numbers is:", sum);