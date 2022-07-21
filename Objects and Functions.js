// -Create a car object, add a color property to it with the value equals 'black'
// -Change the color property of the car object to 'green'
// -Add the power property to the car object, which is a function and displays the engine power to the console
const car = {
    model: 'Audi_A6',
    color: 'black',
    power () {
        console.log('260 HP'); // property as a function
    }
};
console.log(car); // check object
car.power () // check function
// or //
const newcar = {}; // create a car object
newcar.model = 'Audi A8';
newcar.color = 'black';
newcar.color = 'green'; // change proprty 'color' from black to green
console.log(newcar); // check object - color changed :)

// -Pears and apples are accepted to the warehouse, write a function that returns the result of adding the number of accepted pears and apples

function warehouse(apples, pears) {
    return apples + pears;
}
let delivery = warehouse(5,4);
console.log(delivery); // 9
// or //
const grocery = (apples2, pears2) => {
    return apples2 + pears2;
}
let delivery2 = grocery(2,3);
console.log(delivery2) // 5
//or//
let warehouse3 = (apples3,pears3) => apples3 + pears3
let deliv = warehouse3(10,15);
console.log(deliv); // 25

// // - Your name is saved in the payment terminal, write a function to define the name in the terminal (if you entered your name, then hello + name, if not, then there is no such name)
let NewLogin = 'Artem';
let SavedLogin = 'Tanya';
let NameCheckout = (login) => { (login == SavedLogin)?console.log('Hello, ' + login + ', i happy to see you!'):console.log('Who are you? I dont know you.')
};
NameCheckout(SavedLogin); // Hello, Tanya, i happy to see you!
NameCheckout(NewLogin); // Who are you? I dont know you.
// or //
const LoginCheck = function(username){
    let UserLogin = (username == 'Sveta') ? 'Hello, ' + username + '!' : 'You shall not pass.'
    console.log(UserLogin)
    }
    LoginCheck('Alex'); // Hello, Sveta !
    LoginCheck('Sveta'); // You shall not pass.


// -Write a function for calculating the type of argument and type output to the console

let ArgumentTypeCheck = function(TypeValue){
    console.log(typeof(TypeValue));
}
ArgumentTypeCheck(true); // boolean
ArgumentTypeCheck(123); // number
ArgumentTypeCheck('Magic'); // string
ArgumentTypeCheck(null); //
ArgumentTypeCheck(undefined); // undefined
ArgumentTypeCheck({}); // object


// - Write a function that determines whether a number is prime or not 
// IN PROGRESS!!!!

// let PrimeCheck = function(n){
//     let b = n-1;
//     for (let i = 2; i <= b; i++ ){
//         if (n%i === 0)
//         console.log('not ok')
//         } 
//      
//             } 
// PrimeCheck(100);