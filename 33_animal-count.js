/*
cond:
1 mile = per 50 animal
after 10 miles = per 100 animal
*/


/*
var depth = 12;
var animal = 0;

if(depth<=10){
    animal = depth * 50;

}else if(depth<=20){
    var firstPart10 = 10 * 50;
    var remaining = depth - 10; //cal with input

    var secondPart = remaining * 100;
    animal = firstPart + secondPart;

}else{
    var firstPart = 10 * 50;
    var secondPart = 10 * 100;
    var remaining = depth - 20;
    var thirdPart = remaining * 300;
    animal = firstPart + secondPart + thirdPart;

}
console.log(animal);
*/


//in a function
/*
function animalCal(depth){
var animal = 0;

if(depth<=10){
    animal = depth * 50;

}else if(depth<=20){
    var firstPart = 10 * 50;
    var remaining = depth - 10; //cal with input

    var secondPart = remaining * 100;
    animal = firstPart + secondPart;

}else{
    var firstPart = 10 * 50;
    var secondPart = 10 * 100;
    var remaining = depth - 20;
    var thirdPart = remaining * 300;
    animal = firstPart + secondPart + thirdPart;

}
return animal;
}
var result = animalCal(12);
var result = animalCal(16);
console.log(result);
*/