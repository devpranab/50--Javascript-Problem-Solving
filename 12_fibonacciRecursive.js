/* rules:condtion of logic building
fibo[2] = fibo[2-1] + fibo[2-2];
fibo[3] = fibo[3-1] + fibo[3-2];
fibo[4] = fibo[4-1] + fibo[4-2];
fibo[5] = fibo[5-1] + fibo[5-2]; */


function fibonacci(n){
    if(n == 0){
          return 1;   
    }
    if(n == 1){
        return 1;   
    }else{
          return fibonacci(n-1) + fibonacci(n-2);
    }
}
var result = fibonacci(10);
console.log(result);