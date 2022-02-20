// reverse sentence

function reverseString(str){
    let reverse = "";
    for(let i = 0; i<str.length; i++){
     let char = str[i];
     reverse = char + reverse;
    }
    return reverse;
}
let statement = reverseString("HELLO");
console.log(statement);