// word count
let sentence = "Pranab is a good programmer";

let count = 0;
for(let i = 0; i< sentence.length; i++){
    let char = sentence[i];
  // console.log(char);
 if(char == "" && sentence[i-1] != ""){
       count++;
  }
}
count++;
console.log(count);