//print calender of April month

let monthName = "April";
let days = 30;
let startingDay = 3;

console.log(`Calender of April`);
console.log(`sun   mon   tue   wed   thu   fri   sat`);

for(let i=0; i<=5; i++){
  let dayRow = "";
  for(let j=1; j<=7; j++){
      let currentDay = 7*i + j - startingDay;
      if(currentDay>days){
        break;
      }else if(currentDay<1){
          currentDay = "";

      }
      if(currentDay>9){
        dayRow += currentDay + "    ";
      }else{
        dayRow += currentDay + "     ";
      }
      
  }
  console.log(dayRow);
}