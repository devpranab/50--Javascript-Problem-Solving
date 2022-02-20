// performance time find using loop
//know performance of a task
//use built-in kw performance method now()

const startTime = performance.now();

for(let i=0; i<=40; i++){
console.log(i);
}

const endTime = performance.now();

console.log(`loop start ${endTime - startTime} miliseconds to finish`);