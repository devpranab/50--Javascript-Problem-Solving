/*cond:
 =>accept a number from user(Temperature in celcius)
 =>convert it to fahrenheit(Fahrenheit: F=9/5*c +32)
 =>print the result as alert!(Fahrenheit: 94 degree)
 =>print the "Task Completed" in console!
*/

var temp = prompt("Please enter temperature");
var result = 9/5*temp +32;

alert("Fahrenheit:" + result + "degree");
console.log("Task completed");