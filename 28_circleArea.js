/* write a JavaScript function to find the circle area.
sample input: radius = 5
sample output: circle-area = 78.54

PI = PI*r*r[Here r = Radius of Circle]
PI = 3.1416
*/


/*
//function
function areaOfCircle(radius){
    return 3.1416 * radius * radius;

}
//areaOfCircle(2)
console.log(areaOfCircle(6));
*/

/*
//use arrow function
const areaOfCircle = radius => {
    return 3.1416 * radius * radius;

}
//areaOfCircle(2)
console.log(areaOfCircle(6));
*/

//use arrow function in short
const areaOfCircle = radius => Math.PI * radius * radius;

//areaOfCircle(2)
console.log(areaOfCircle(4));