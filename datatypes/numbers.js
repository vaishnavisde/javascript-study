//numbers
//the easy way to write a number is "e"

console.log(3e7); //30000000

console.log(1e-5); //0.00001

//hexadecimal we can use "x"
//octal we can use "0o"
//binary we can use "0b"

//ROUNDING

//math.floor rounds down
console.log(Math.floor(5.7)); //5
console.log(Math.floor(-5.7)); //-6

//math.ceil rounds up
console.log(Math.ceil(6.3)); //7
console.log(Math.ceil(-6.8)); //-6

//math.trunc remove everything after decimal point without rounding
console.log(Math.trunc(4.7)); //4
console.log(Math.trunc(-7.6)); //-7

//math.round it will rounds to the nearest
console.log(Math.round(7.4)); //7

let num = 12.2378;
console.log(Math.round((num * 100) / 100));

//the another method of rounding is toFixed
let Num = 23.678;
console.log(+Num.toFixed(2));

//isFinete converts a argument to a number and return true
console.log(isFinite(35)); //true
console.log(isFinite("33")); //true
console.log(isFinite("srt")); //false

//parseInt and parseFloat
//it converts a value to like 12px and 100pt as a number

console.log(parseInt("12px")); //12
console.log(parseFloat("100.89pt")); //100.89
console.log(parseInt("a56")); //it become nan beacause the first symbol stop the process

//math.randam returns any randam number
console.log(Math.random()); //any randam numbers

//math.max returns the greatest number
console.log(Math.max(5.7, 4, 7, 3, 10)); //10

//math.min returns the smallest number
console.log(Math.min(-3, 11, 8)); //-3

//math.pow retuns n raised to the given power
console.log(Math.pow(2, 10)); //1024
