// const year = 2032;
// console.log(2032/4); // it`s leap year
// console.log(2032%4); // it`s leap year

//or way
/* const year = 2031;
const remainder = year % 4;
console.log(remainder == 0); */

// or condtition way
/* const year = 3998;
const remainder = year % 4;
if(remainder == 0){
    console.log("year is leap year");
} else{
    console.log("year is not leap year");
} */

// at function
function isleapYear(year){
const remainder = year % 4;
if(remainder == 0){
    console.log("year is leap year");
} else{
    console.log("year is not leap year");
}
}
isleapYear(2028);