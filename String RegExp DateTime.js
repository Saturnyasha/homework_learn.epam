//1. Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'

let stringCheck = 'ahb acb aeb aeeb adcb axeb aXb AeN';
let regExp = /a.b/gi; 
console.log(stringCheck.match(regExp)); //[ 'ahb', 'acb', 'aeb', 'aXb' ]

//2. Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest

let stringNum = '2 + 3 233 2223';
let re = /2 \+ 3/g 
console.log(stringNum.match(re));

//3. Get the day, month and year of the current date and output it to the console separately

let today = new Date(); // 
console.log(today); 
console.log(today.getHours()); 
console.log(today.getFullYear());
console.log(today.getDate()); 
console.log(today.getDay()); 

// получу день недели в виде текста

function NameWeekDay() {
  let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  return days[today.getDay()]; 
}
console.log( NameWeekDay(today) );