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

let nivi = createPerson("nivi");
nivi.greetings();

//optional chaining
//the optional chaining stop the evaluation if the value before? is undefined or null and return undefined

let admin = {
  name: "vaish",
  age: 17,
  adress: {},
  greetings() {
    console.log("your welcome");
  },
};

//obj?.pro-returns obj.pro  if object exists otherwise undefined
console.log(admin.adress?.street);//undefined
console.log(admin?.name);//vaish


//obj.method?.() calls obj.method() if obj.method exests.otherwise return undefined
admin.greetings?.(); //your welcome
user?.greetings(); //nothing no such method