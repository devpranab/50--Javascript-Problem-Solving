//In this sentence,how many have pranab word
//and find position no of first pranab

const sentence = "Going to be programmer Pranab, pranab is hard worker and he always ready to taking critical challenge. pranab wants to do something in his life, pranab";

const matches = sentence.match(/pranab/gi);
const occurances = matches ? matches.length : 0;
console.log(occurances);

let position = sentence.search(/pranabs/i);
position = position >= 0 ? position : "Not found";
console.log(position);