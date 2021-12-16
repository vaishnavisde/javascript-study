//OBJECT METHODS
//function are stored in object properties are called methods
//methods are allow object to act like or do something

let user = {
  name: "vaish",
  age: 17,
  gender: "female",
};

user.sayHi = function () {
  console.log("hello!");
};

user.sayHi();

//we can also use pre-defined function as a method

let admin = {
  name: "papa",
  Age: 20,
};
function sayhi() {
  console.log("welcome");
}

user.sayhi = sayhi();

//"this" in method
//to access the object method can use the "this" keyword

let person={
    name:"vicky",
    age:10,
}

person.Sayhi=function(){
    console.log(this.name +" "+"your welcome");
}
person.Sayhi();