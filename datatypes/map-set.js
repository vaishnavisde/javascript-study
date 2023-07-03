//map is a collection of keyed values
//it allows keys of any type
//the object also ca be used as a key

let fruits = new Map();

fruits.set("apples", 30);
fruits.set("bananas", 33);
fruits.set("grapes", 36);

console.log(fruits.get("apples")); //30
console.log(fruits.size); //3

//map.has returs true if key exists otherwise false
console.log(fruits.has("apples")); //true
console.log(fruits.has("papaya")); //false

//map.key returns the interable for keys
//map.value returns the interable for values
//map.entries returns the interable for entries keys and values used by default in for of loop

let vegetables = new Map([
  ["tomato", 200],
  ["potato", 300],
  ["brinjal", 400],
]);

for (let thinks of vegetables.keys()) {
  console.log(thinks); //tomato...potato...brinjal
}

for (let amount of vegetables.values()) {
  console.log(amount); //200...300..400
}

for (let entry of vegetables.entries()) {
  console.log(entry); //tomato,300...potato,300
}

//in forEach method
vegetables.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
//-----------------------------><-------------------------------------

//set--collection of unique values
//each value occurs only once in a set
//it can hold any data type

let letters = new Set(["a", "b", "m", 4]);

letters.add("g");
letters.add("v");
letters.add("n");

//set. has returns true if a value exists
console.log(letters.has("g")); //true
console.log(letters.size); //4

//value() returns an iterator withh all the values in a set
//keys() same as values
//entries() returns an iterator with the value,value pairs from a set

for (let letter of letters.values()) {
  console.log(letter);
}

for (let has of letters.keys()) {
  console.log(has);
}

for (let whole of letters.entries()) {
  console.log(whole);
}

//in forEach method
letters.forEach((value) => {
  console.log(`In this array ${value}`);
});
