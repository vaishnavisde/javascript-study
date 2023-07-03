//splice--used to delete are add one element at same time
let message = ["I", "Hate", "You"];

//------>deleteing and adding element<-------
message.splice(1, 1, "love");
console.log(message); //i love you

//splice--it return the elements between start to end {not end }
console.log(message.slice(1, 2)); //love

//concat--returns a new array copies all members of the current one and add items to it
//if any of its array then it elements are taken
console.log(message.concat(9, (0)[(9, 8)]));

//foreach--calls function for every element
let user = ["vais", "gowtham", "kirthick"];
user.forEach((items, index, array) => {
  console.log(`${items} is an index ${index} in ${array}`);
});

//indexof/lastindexof--look for the item starting from position teturn the index
//-1 for not found
console.log(user.indexOf("gowtham")); //1

//includes--returns true if thr array has value otherwise false
console.log(user.includes("kirthick")); //true
console.log(user.includes("Kirthick")); //false

//find(function)--if there are array of object to find object these method are use
let peoples = [
  { id: 1, name: "arasu" },
  { id: 2, name: "prakash" },
  { id: 3, name: "sethu" },
];

let people = peoples.find((item) => item.id == 1);

console.log(people.name); //arasu

//filter(function)--it is same as find but it use to find more
let person = [
  { id: 1, name: "arasu" },
  { id: 2, name: "prakash" },
  { id: 3, name: "sethu" },
];

let persons = person.filter((item) => item.id < 3);

console.log(persons.length);

//map--creates a new array from result of calling function for every element
let length = ["nive", "maha", "ani"].map((item) => item.length);
console.log(length); //4,4,3

//sort(function)--sorts the array in place changing its element order
let num = [15, 1, 2];
console.log(num.sort()); //1,15,2

//we need to order it so we can use the function
num.sort((a, b) => a - b);
console.log(num); //1,2,15

//reverse--it reverse the order of the element
let numeric = [1, 2, 3, 4, 5, 6, 7];
console.log(numeric.reverse()); //7,6,5,4,3,2,1

//split--it split the element
let animals = "dog, lion, tiger";
let arr = animals.split(", ");

for (let animals of arr) {
  console.log(`A message to ${animals}.`); // A message to dog  (and other names)
}

//join--join the element
let birds = ["peacock", "parrot", "duck"];
let Birds = birds.join(";");

console.log(Birds);

//reduce--calculate a single value over the array by calling function for each element
//and passing an intermiate result between the calls
let multiple = [1, 2, 3, 4, 5];

let result = multiple.reduce((multiple, current) => multiple * current, 1);

console.log(result);//120
