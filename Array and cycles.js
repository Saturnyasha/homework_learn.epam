// 1. Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console
const arrMovie = ['Gran Torino', 'Scent of a woman','Big fish','Forrest Gump','Bicentennial Man','Cloud Atlas','Inception','The Prestige','Eternal Sunshine of the Spotless Mind'];
for (let i = 0; i < arrMovie.length; i++) {
    console.log(arrMovie[i])
};

/*2. Given an array of car manufacturers, convert the array to a string and back to an array*/
const autoVAG = ['Audi', 'Wolksvagen','BMV','Opel','Mersedes'];
/*2-1. to string */
console.log(autoVAG.join());
/*2-2. to array */
let strToArray = "Audi Wolksvagen BMV Opel Mersedes";
let autoVAGarr = strToArray.split(' ')
console.log(autoVAGarr);

/*3. Given an array of the names of your friends, add the words hello to each element of the array*/
const friends = ['Polina', 'Yulia', 'Tanya', 'Rita','Nastya'];
for ( let el of friends){
    console.log(`Hello, ${el}, how do you do?`)}

/*4. Convert numeric array to Boolean*/
const numericArray = [1,3,0,6,7,15,0,0,0,9,13];
console.log(numericArray.map(e => !!e))

/*5. Sort the array [1,6,7,8,3,4,5,6] in descending order*/
const num = [1,6,7,8,3,4,5,6];
num.sort((a,b) => a-b);
console.log(num); 

/*6. Filter array [1,6,7,8,3,4,5,6] by value> 3*/
const arrNum = [1,6,7,8,3,4,5,6];
const arrNumFilter = arrNum.filter(e => e > 3);
console.log(arrNumFilter);

/*7. Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number*/
const variableNumbers = [1,2,3,4,5,6,7,8,9,0];
let indexcheck = function(x,variableNumbers){
    variableNumbers.forEach((e,index) => {
        (x === e)?console.log(`This number has an index ${index}`):console.log('wrong number')
    });
};
indexcheck(15,variableNumbers);
indexcheck(0,variableNumbers);

/*8. Implement a loop that will print the number 'a' until it is less than 10*/
let a = 20
while (a >= 10) {
  console.log(a)
  a--
};

/*9. Implement a loop that prints prime numbers to the console*/
let n = 20;
primeLabel:
for (let i = 2; i <= n; i++){
    for (let k = 2; k < i; k++) {
        if (i % k == 0) continue primeLabel;
    }
    console.log(i)
}; 

/*10. Implement a loop that prints odd numbers to the console*/
let p = 50;
for ( let i=2; i<=p;i++){
    if (i%2 == 0){
        console.log(i)
}
};