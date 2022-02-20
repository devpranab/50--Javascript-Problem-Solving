//How to flattern a multi-dimensional array
//use flat() method of array - work for one level array
//use flat(infinity) for flattern - multi level array

/*
let multiArr = ['a', [1, 2],'b', [3, 4]];
let result = multiArr.flat();
console.log(result);
*/

//multi level array
let multiArr = ['a', [1, 2],'b', [3, 4, [5, 6]]];
let result = multiArr.flat(Infinity);
console.log(result);