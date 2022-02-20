//fizbuzz problem: 1-100 (3,5)
// upto 1-100, kon number 3,5 and 3,5 uvoy number dara bivajjo

function fizbuzz(number){
    for(let i=1; i<=number; i++){
        if(i% 15 == 0){
        console.log(`${i} is fizzbuzz`);
        }else if(i% 3 == 0){
        console.log(`${i} is fizz`);
        }else if(i% 5 == 0){
            console.log(`${i} is buzz`);
        }else{
            console.log(i);
        }
    }
}
fizbuzz(100);