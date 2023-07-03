//object are used to store keyed collection of various data and complex entities.
//it store properties (key:value) pairs.properties must be a string are symbols
//value can be of any type.

//to access a property
//the dot notation "obj.property"
//or square bracket notation "obj[property]"

let user = {
  name: "vaish",
  age: 17,
  gender: "female",
  isAlive: true,
};
console.log(user["gender"]);
console.log(user.name);

//we can't change the key but we can change the value
user.name = "papa";
console.log(user.name);

//we can also delete the property
delete user.isAlive;
console.log(user);

//to check the property the given value is exists
console.log("age" in user);

//to iterate over an object: for(key in obj)loop
for (let key in user) {
  console.log(key); //the output will be name,age,gender
  console.log(user[key]); //the output will be papa,17,female
}
onsole.log(user.isAlive)
console.log(user.gender)
console.log(user.age)
console.log(user.name)