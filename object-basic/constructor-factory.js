//there is two way to create new object
//constructor function and factory function

//constructor function should be in pascal scale
//here we using the "new" keyword
function Person(name) {
  this.name = name;
  this.greetings = Function();
  {
    console.log("my name is" + " " + name);
  }
}
let user = new Person("arun");
user.greetings();

//factory function

function createPerson(name) {
  return {
    name,
    greetings() {
      console.log(`my name is ${this.name}`);
    },
  };
}
let kirthick = createPerson("kirthick");
kirthick.greetings();
