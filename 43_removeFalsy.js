//remove falsy value in mixed array
/*
const mixedArr = [
    "pranab",
    undefined,
    "sarkar",
    false,
    '',
    "apple",
    40,
    true,
    "thank you all",
    NaN
];

/*
const trueArr = mixedArr.filter(function(ele){
if(ele){
    return true;
}else{
    return false;
}
});
console.log(trueArr);
*/
/*
const trueArr = mixedArr.filter(Boolean);
console.log(trueArr);
*/
//------------------------------------------------------------------------------------------
//remove falsy value in mixed object

const obj = {
    a: "pranab",
    b: undefined,
    c: "sarkar",
    d: false,
    e: '',
    f: "apple",
    g: 40,
    h: true,
    i: "thank you all",
    j: NaN,
};

const trueObj = function(obj){
    for(const i in obj) {
        if(!obj[i]){
            delete obj[i];
        }
    }
    return obj;
}
console.log(trueObj(obj));