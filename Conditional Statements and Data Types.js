//homework conditional statement and data types//
let a = 'boo';
let b = false;
let c = 15;
let d = true;

// 1. Perform addition of various types (string + boolean, string + number, number + boolean)
//1-1 string + boolean
console.log( a + b); // boofalse
//1-2 string + number
console.log(a + c); // boo15
//1-3 number + boolean
console.log(c + d); // 16
console.log(c + b);// 15

// 2. Perform multiplication of various types (string * boolean, string * number, number * boolean)
//2-1 string * boolean
console.log( a * b); // NaN
//2-2 string * number
console.log( a * c); // NaN
//2-3 number * boolean
console.log( b * c); // 0
console.log( c * d); // 15

// 3. Divide different types (string / boolean, string / number, number / Boolean)
//3-1 string / boolean
console.log(a / b); // NaN
//3-2 string / number
console.log(a / c); // NaN
//3-3 number / Boolean
console.log(c / d); // 15
console.log(c / b); // Infinity

// 4. Perform explicit conversion (number, string, boolean)
let e = 13;
let f = '15';
//4-1 to String
let toString = String(e);
console.log(toString);
//4-2 to Number
let toNumber = Number(f);
console.log(f);
//4-3 to Boolean
let x = 1;
let toBoolean = Boolean(x);
console.log(toBoolean); // true // if x = 0 -> false

let raw = "magic";
let toBoolean2 = Boolean(raw);
console.log(toBoolean2); // true

let raw2 = "";
let toBoolean3 = Boolean(raw2);
console.log(toBoolean3); // false
