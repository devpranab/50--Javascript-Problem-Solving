/* 
    find tiny Friend
    cond:
*/
let friends = ["pranab", "bhagirath", "raj", "pravash", "manaj"];
function tinyFd(fd){
    if(friends.length == 0){
        console.log("pls enter a valid fd list");

    }
    let tiny = friends[0];
    for(let i=0; i<friends.length; i++){
        if(friends[i].length<tiny.length){
            tiny = friends[i];
        }
    }
    console.log("tiny friend is " + tiny);
}
tinyFd(friends);