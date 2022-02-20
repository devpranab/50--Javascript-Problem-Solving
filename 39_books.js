//problem:books
/*
01 - Take all the books with price less than 500 and rating greater than 4
02 - Short them by their rating in Descending order
03 - Pick their name
*/

const books = [
    {name: "book1", price:450, rating:4.2},
    {name: "book2", price:505, rating:4.3},
    {name: "book3", price:360, rating:5},
    {name: "book4", price:610, rating:4.4}
];

//01 - Take all the books with price less than 500 and rating greater than 4
const filterBook = books.filter(function(book){
    return book.price < 500 && book.rating > 4;
})
//console.log(filterBook);

//02 - Short them by their rating in Descending order
const sortBook = filterBook.sort(function(b1, b2){
    if(b1.rating < b2.rating) return +1;
    return -1;

});
// console.log(sortBook);

//03 - Pick their name
const pickName = sortBook.map(function(b1){
    return b1.name;

});
console.log(pickName);

//tips:use arrow function