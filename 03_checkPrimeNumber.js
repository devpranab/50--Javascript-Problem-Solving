// is prime number or not?

/* var n = 12;
for(i = 2; i < n; i++){
  console.log(n, i);

} */


// 128, 2 checking point
// 128, 3
// 128, 4

var n = 128;
function isPrime(n){
    for(i = 2; i < n; i++){
        if(n % i == 0){
        return "not a prime number"
        }
        }
        return "a prime number"
}

var result = isPrime(128);
var result = isPrime(139);
var result = isPrime(9);
console.log(result);

