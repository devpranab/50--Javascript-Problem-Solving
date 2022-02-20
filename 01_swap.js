var a = 5;
var b = 7;
console.log("before swap: a=", a, "b=", b);

// swap
// 1st way 
var c = a;
a = b
b = c
console.log("after swap: a=", a, "b=", b);


// 2nd way
var x = 5;
var y = 7;
x = x + y; //5+7 = 12
y = x - y //12-7 = 5
x = x - y //12-5 = 7
console.log("after swap: x=", x, "y=", y); 


// 3rd way
var p = 5;
var q = 7;
[p, q] = [q, p];