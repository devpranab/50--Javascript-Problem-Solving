// comes random number 1 to 10
var randomNum = Math.random()*10;
var result = Math.round(randomNum); //int
console.log(result);

//or
for(var i = 0; i<10; i++){
    var randomNum = Math.random()*6;
    var result = Math.round(randomNum); //int.
    console.log(result);
}