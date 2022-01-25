//map is a collection of keyed values
//it allows keys of any type
//the object also ca be used as a key

let fruits = new Map();

fruits.set("apples", 30);
fruits.set("bananas", 33);
fruits.set("grapes", 36);

console.log(fruits.get("apples"));//30
console.log(fruits.size);

//map.has returs true if key exists otherwise false
console.log(fruits.has('apples'));
console.log(fruits.has('papaya'));


