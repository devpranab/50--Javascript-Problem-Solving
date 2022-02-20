//shuffling randomly

const numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(numbers.sort(() => Math.random() - 0.5));

//0.5 means sometimes positive sometimes negetive