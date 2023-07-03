//variable assigned to an object not the object itself but,,
//it 'address in memory' in other words 'a reference' to it

let user = {
  name: "vaish",
  age: 17,
};

let addmin = user;
console.log(addmin);

//the another way to copy it is clone "object.assign"

let person = {
  name: "papa",
  age: 18,
  gender: "female",
};

let another = Object.assign({ isAlive: true }, person);

another.name = "gowtham";
console.log(another);



//GARBAGE COLLECTION...
//in javascript garbage collection are performed automatically..
//we cannot force it are prevent it
//object are retained in memory while they are reachable