let num = 10;

let sum = 0;
for (i = 1; i <= num; i++) {
  if (i % 2 == 0) {
    sum = sum + i;
  }
}
console.log("sum of even number:" + " " + sum);

let evenNumbers = (num) => {
  let sum = 0;
  for (i = 1; i <= num; i++) if (i % 2 == 0) sum = sum + i;
  console.log(sum);
};
evenNumbers(10);
