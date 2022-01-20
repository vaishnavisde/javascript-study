//array is an specail kind of object suited to storing and managing ordered data idems
// an array can store any type
//there are two syntax to create an array

let vegetables = ["carrot", "tomato", "potato"];

let fruits = new Array("mango", "apple", "orange");

//we can access its element by its number
console.log(vegetables[2]);

//we can also replace the element
fruits[1] = "grapes";
console.log(fruits);

//we can also add an element
fruits[3] = "apple";
console.log(fruits);

//the total count of an element in array is an length
console.log(fruits.length);

//methods pop/push and shift/unshift
//pop and push are works end of the array

//pop remove the last element of the array
let arr = [
  "red",
  { name: "vaish" },
  function () {
    console.log("hello");
  },
];
arr.pop();
console.log(arr); //red,vaish

//push add an element to the end of the array
arr.push("cabbage");
console.log(arr);

//shift/unshift works begining of the array

//shift remove one element from begining of the array
let colour = ["pink", "yellow", "green"];
colour.shift();
console.log(colour); //yellow ,green

//unshift  add one element to the beginging of the array
colour.unshift("red");
console.log(colour);

console.log(colour.length);