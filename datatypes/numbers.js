//numbers
//the easy way to write a number is "e"

console.log(3e7);//30000000

console.log(1e-5);//0.00001

//hexadecimal we can use "x"
//octal we can use "0o"
//binary we can use "0b"

//ROUNDING

//math.floor rounds down
console.log(Math.floor(5.7));//5
console.log(Math.floor(-5.7));//-6

//math.ceil rounds up
console.log(Math.ceil(6.3));//7
console.log(Math.ceil(-6.8));//-6

//math.trunc remove everything after decimal point without rounding
console.log(Math.trunc(4.7));//4
console.log(Math.trunc(-7.6));//-7

//math.round it will rounds to the nearest 
console.log(Math.round(7.4));//7

let num=12.2378
console.log(Math.round(num*100/100));

//the another method of rounding is toFixed
let Num=23.678
console.log(+Num.toFixed(2));


