//checking whether the given value is in number
function CheckIsNumber(input) {
    if (typeof input !== "number") {
      throw "given value is not in number";
    }
    return true;
  }
  //sum of two numbers
  let sum = (a, b) => {
    CheckIsNumber(a);
    CheckIsNumber(b);
    return a + b;
  };
  
  //subraction of two numbers
  let subraction = (a, b) => {
    CheckIsNumber(a);
    CheckIsNumber(b);
    return a - b;
  };
  
  //multiplication of two numbers
  let multiple = (a, b) => {
    CheckIsNumber(a);
    CheckIsNumber(b);
    return a * b;
  };
  
  //division of two numbers
  let division = (a, b) => {
    CheckIsNumber(a);
    CheckIsNumber(b);
    return a / b;
  };
  //calculating
  function result(calculate) {
    switch (true) {
      case calculate == sum:
        console.log("Result for sum of two number is,", sum(9, 8));
        break;
      case calculate == subraction:
        console.log("Result for subraction of two number is,", subraction(5,9));
        break;
      case calculate == multiple:
        console.log("Result for multiple of two number is,", multiple(6, 9));
        break;
      case calculate == division:
        console.log("Result for division of two number is,", division(56, 9));
    }
  }
  result(sum);
  
  //the out put will be
  
  //sum of two number is 17
  