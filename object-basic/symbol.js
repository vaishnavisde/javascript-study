//symbol is an primitive data type
//the symbol with an same description they or not equal
let id = Symbol("this is an symbol");
let id2 = Symbol("this is an symbol");

console.log(id === id2);

//if we need to access it we some special thing
console.log(id.toString()); //symbol(description)

//if we need only the description we can written it as
console.log(id.description); //this is an symbol

//symbol used hidden prpoperty of an object
let anothername = Symbol("person");

let person = {
  name: "vais",
  age: 17,
  district: "erode",
  [anothername]: "vaishnavi",
};
console.log(person);

console.log(person[anothername]);

//if we need to make the symbol as equal we need to use global registry

let school = Symbol.for("students,teachers");

let school2 = Symbol.for("students,teachers");

console.log(school === school2);

console.log(Symbol.keyFor(school2)); //students,teachers"

//if it is not in global registry the keyfor will won't work
console.log(Symbol.keyfor(id)); //undefined

//so we can use description method
console.log(school.description); //students,teachers
