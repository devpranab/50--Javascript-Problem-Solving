//find max number in array

let studentMarks = [66, 50, 70, 80, 24, 45];

var max = studentMarks[0];
for(let i = 0; i<studentMarks.length; i++){
    let element = studentMarks[i];
    console.log(element);
    if(element > max){
        max = element;
    }
}
console.log("Highest value is", max);


// running the code this way; comparing process
// 45 > 45
// 45 > 50
// 50 > 70
// 70 > 80
// 80 > 24
// 24 > 45