// find the biggest word(string) in array line and her index no.

function biggestString(names){
    let biggestWord = "";
    for(name of names){
        if(name.length > biggestWord.length){
            biggestWord = name;
        }
    }
return [biggestWord, names.indexOf(biggestWord)]
}
const result = biggestString(["pranab", "ramij", "bhagirath"]);
console.log(result);
