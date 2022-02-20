//brick calculator
/* cond:concepts
upto 10 tala = needs 15 feets per
upto 20 tala = needs 12 feets per
upto 30 tala = needs 10 feets per

1 feet = 1000 bricks need
*/

function brickCalculator(howTala){
if(howTala <= 10){
var finalFeet = howTala * 15;
var re = finalFeet*1000
console.log(re + " bricks need for " + howTala + " tala");
}
 else if(howTala > 10 || howTala == 20){
    var finalFeet = howTala * 12;
    var re = finalFeet*1000
    console.log(re + " bricks need for " + howTala + " tala");
} 
else if(howTala > 20 || howTala == 30){
    var finalFeet = howTala * 10;
    var re = finalFeet*1000
    console.log(re + " bricks need for " + howTala + " tala");
} 
else{
console.log("no result");
}
    
}
var result = brickCalculator(20);
console.log(result);