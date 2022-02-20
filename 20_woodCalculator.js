/* cond:
chair - 1 cubic meter
table - 3 cubic meter
bed - 5 cubic meter
*/

function woodCalculator(chair, table, bed){
   var finalChair = chair * 1;
   var finalTable = table * 3;
   var finalBed = bed * 5;
   var total = finalChair+finalTable+finalBed;
   console.log(total);
}
var result = woodCalculator(2,3,2); //user 3 input
console.log(result); //total output