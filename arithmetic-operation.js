//checking whether the given value is in number
const checkIsNumber = (input) => {
  if (typeof input !== "number") {
    throw "given value is not in number";
  }
  return true;
};
//sum of two numbers
const sum = (a, b) => {
  checkIsNumber(a);
  checkIsNumber(b);
  return a + b;
};

//subraction of two numbers
const subraction = (a, b) => {
  checkIsNumber(a);
  checkIsNumber(b);
  return a - b;
};

//multiplication of two numbers
const multiple = (a, b) => {
  checkIsNumber(a);
  checkIsNumber(b);
  return a * b;
};

//division of two numbers
const division = (a, b) => {
  checkIsNumber(a);
  checkIsNumber(b);
  return a / b;
};
//calculating
function calcuations(type, a, b) {
  switch (type) {
    case "sum":
      console.log(`Sum of ${a}+${b} =`, sum(a, b));
      break;
    case "subraction":
      console.log(`Subraction of ${a}-${b} =`, subraction(a, b));
      break;
    case "multiple":
      console.log(`Multiplication of ${a}*${b} =`, multiple(a, b));
      break;
    case "division":
      console.log(`Division of ${a}/${b} =`, division(a, b));
      break;
    default:
      throw new Error("Please provide valid input");
  }
}

//sum of two number is 17
calcuations("division", 9, 7);
