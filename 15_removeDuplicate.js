// remove the duplicate number

let numbers = [4,6,7,3,2,5,6,4,5];

let uniqueNumbers = [];
for(let i = 0; i<numbers.length; i++){
    let element = numbers[i];

    var index = uniqueNumbers.indexOf(element);
    if(index == -1){
  uniquNumbers.push(element);
 }
}
console.log(uniqueNumbers);