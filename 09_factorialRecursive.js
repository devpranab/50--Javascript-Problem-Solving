// small to big 
// var i = 10;
// while(i>=1){
//  i--   
// }

// rules: 5! = (5-1)*5
// rules: 6! = (6-1)*6
// rules: 10! = (10-1)*10

function factorial(n){
    if(n == 0){
          return 1;   
    }else{
          return n * factorial(n-1);
    }
}
var result = factorial(10);
console.log(result);