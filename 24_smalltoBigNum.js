// find: small to biggest number

const mixNumbers = [4,3,2,6,5,3,1,2];
const result = mixNumbers.sort(function(a,b){
return a - b;
})
console.log(result);


/* Output:
1, 2, 2, 3,
3, 4, 5, 6
*/