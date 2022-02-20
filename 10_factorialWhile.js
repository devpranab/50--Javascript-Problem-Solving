function factorial(n) {
    var i = 1;
    var fact = 1;
    // use of while
    while (i <= n) {
        fact = fact * i;
        i++;
    }
    return fact;
}
var result = factorial(6);
console.log(result);