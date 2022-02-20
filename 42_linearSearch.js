/* input: linearSearch(["a", "b", "c", "d", "c"], "c")
   output: 2 or "not found"
   problem: impliment this linearSearch() function
   */

function linearSearch(arr, val){
   const len = arr.length;
       for(let i=0; i<len; i++){
        if(arr[i] === val){
        return i;
           }
       }
       return "not found";
   }
console.log(linearSearch(["a", "b", "c", "d", "c"], "c"));
