// 1. Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console
const arrMovie = ['Gran Torino', 'Scent of a woman','Big fish','Forrest Gump','Bicentennial Man','Cloud Atlas','Inception','The Prestige','Eternal Sunshine of the Spotless Mind'];
for (let i = 0; i < arrMovie.length; i++) {
    console.log(arrMovie[i])
};
// or //
for ( let el of arrMovie){
    console.log(el)
};
//or//
arrMovie.forEach((el) => {
    console.log(el);
});

//2. Given an array of car manufacturers, convert the array to a string and back to an array
const autoVAG = ['Audi', 'Wolksvagen','BMV','Opel','Mersedes'];
//2-1. to string //
console.log(autoVAG.join()); // Audi,Wolksvagen,BMV,Opel,Mersedes
console.log(autoVAG.join(''));// AudiWolksvagenBMVOpelMersedes
console.log(autoVAG.join('-'));// Audi-Wolksvagen-BMV-Opel-Mersedes
//2-2. to array //
let strToArray = "Audi,Wolksvagen,BMV,Opel,Mersedes";
let autoVAGarr = strToArray.split(' ');
console.log(autoVAGarr);//[ 'Audi,Wolksvagen,BMV,Opel,Mersedes' ] - все названия как один элемент массива
//or//
let autoVAGarr2 = strToArray.split('');
console.log(autoVAGarr2); 
 /* [
   'A', 'u', 'd', 'i', ',', 'W',
   'o', 'l', 'k', 's', 'v', 'a',
   'g', 'e', 'n', ',', 'B', 'M',
   'V', ',', 'O', 'p', 'e', 'l',
   ',', 'M', 'e', 'r', 's', 'e',
   'd', 'e', 's'
   ] - каждый символ - элемент массива */
//or//
let strToArray2 = "Audi Wolksvagen BMV Opel Mersedes"; // 
let autoVAGarr3 = strToArray2.split(' ')
console.log(autoVAGarr3);//[ 'Audi', 'Wolksvagen', 'BMV', 'Opel', 'Mersedes' ] - каждая марка теперь - элемент массива

//3. Given an array of the names of your friends, add the words hello to each element of the array
const friends = ['Polina', 'Yulia', 'Tanya', 'Rita','Nastya'];
for ( let el of friends){
    console.log(`Hello, ${el}, how do you do?`)}
/* Hello, Polina, how do you do?
Hello, Yulia, how do you do?
Hello, Tanya, how do you do?
Hello, Rita, how do you do?
Hello, Nastya, how do you do? */

//4. Convert numeric array to Boolean
const numericArray = [1,3,0,6,7,15,0,0,0,9,13];
for (let el of numericArray){
    console.log(Boolean(el))
}; //true// true// false// true// true// true// false// false// false// true// true
//or//
for(n = 0; n < numericArray.length; n++){
    console.log(Boolean(numericArray[n]))
};
//or .map method//
console.log(numericArray.map(e => !!e))// более короткая запись

//5. Sort the array [1,6,7,8,3,4,5,6] in descending order
const num = [1,6,7,8,3,4,5,6];
num.sort (function(a,b){
    return b-a
});
console.log(num);//[ 8, 7, 6, 6,5, 4, 3, 1]
// or //
num.sort(function(a,b){
    if (a<b){
        return 1
    } else if (a>b){
        return -1
    } else {
        return 0
    }
});
console.log(num);//[ 8, 7, 6, 6,5, 4, 3, 1]
// or //
num.sort((a,b) => a-b);
console.log(num); // более короткая запись

//6. Filter array [1,6,7,8,3,4,5,6] by value> 3
const arrNum = [1,6,7,8,3,4,5,6];
const arrNumFilter = arrNum.filter(e => e > 3);
console.log(arrNumFilter);//[ 6, 7, 8, 4, 5, 6 ]

//7. Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number
const variableNumbers = [1,2,3,4,5,6,7,8,9,0];
let indexcheck = function(x,variableNumbers){
    variableNumbers.forEach((e,index) => {
        (x === e)?console.log(`This number has an index ${index}`):console.log('wrong number')
    });
};
indexcheck(15,variableNumbers);//wrong number
indexcheck(0,variableNumbers);//This number has an index 9

//8. Implement a loop that will print the number 'a' until it is less than 10
let a = 20
while (a >= 10) {
  console.log(a)
  a--
};
//or//
for (b = 20; b >= 10; b--){
    console.log(b)
};

//9. Implement a loop that prints prime numbers to the console
//выведу простые числа от 0 до 20 + использую "метку" для цикла
let n = 20;
primeLabel:
for (let i = 2; i <= n; i++){ //для чисел, которые буду проверять
    for (let k = 2; k < i; k++) { // перебор делителей
        if (i % k == 0) continue primeLabel;
    }
    console.log(i)
}; // 2,3,5,7,11,13,17,19

//10. Implement a loop that prints odd numbers to the console
let p = 50;
for ( let i=2; i<=p;i++){
    if (i%2 == 0){
        console.log(i)
}
}; //2, 4,6,8,10, 12,14, 16, 18, 20, 22,24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50