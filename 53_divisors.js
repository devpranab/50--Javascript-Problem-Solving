//find divisors
/*ex-
4 = 1, 2, 4
*/

let n = 5;
let range = Math.ceil(Math.sqrt(n));

let divisors = "";

for(let i = 1; i<=range; i++){
    if(n % i == 0){
        if(i == n/i){
            divisors += i + " ";
    }else{
        divisors += i + " " + (n/i) + " ";
    }
  }
}
console.log(divisors);