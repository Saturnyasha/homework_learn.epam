/* 1.1 - Create a car object, add a color property to it with the value equals 'black'
   1.2 - Change the color property of the car object to 'green'
   1.3 - Add the power property to the car object, which is a function and displays the engine power to the console*/
const car = {
    model: 'Audi_A6',
    color: 'black',
    power: () => {
        console.log('260 HP');
    }
};
console.log(car);
car.power ();


const newcar = {};
newcar.model = 'Audi A8';
newcar.color = 'black';
newcar.color = 'green'; 
console.log(newcar);


/* 2 - Pears and apples are accepted to the warehouse, write a function that returns the result 
of adding the number of accepted pears and apples */
function warehouse(apples, pears) {
    return apples + pears;
};
let delivery = warehouse(5,4);
console.log(delivery); // 9


/* 3 - Your name is saved in the payment terminal, write a function to define the name in the terminal 
(if you entered your name, then hello + name, if not, then there is no such name)*/
let savedName = 'Tanya';
const loginCheck = function(username){
    let userLogin = (username == savedName) ? 'Hello, ' + username + '!' : 'You shall not pass.'
    console.log(userLogin)
    };
    loginCheck('Egor');
    loginCheck('Tanya');


/* 4 - Write a function for calculating the type of argument and type output to the console */
function argumentTypeCheck(typeValue) {
    console.log(typeof (typeValue));
}
argumentTypeCheck(true);
argumentTypeCheck(123);
argumentTypeCheck('Magic');
argumentTypeCheck(null);
argumentTypeCheck(undefined);
argumentTypeCheck({});


/* 5 - Write a function that determines whether a number is prime or not 
Простое число - число, которое больше единицы, делится только на 1 и на само себя без остатка. */
const primeCheck = function(n){
    for (let i =2; i < n; i++){ 
        if (n % i == 0){
            return false 
        }
    } return n > 1 
}
console.log(primeCheck(1));
console.log(primeCheck(5));
console.log(primeCheck(7));
console.log(primeCheck(8));
console.log(primeCheck(10));
