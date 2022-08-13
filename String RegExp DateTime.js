//1. Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'

let stringCheck = 'ahb acb aeb aeeb adcb axeb aXb AeN';
let regExp = /a.b/gi; // ставлю флаги g - для поиска по всей строке и флаг i - для игнора регистра
console.log(stringCheck.match(regExp)); //[ 'ahb', 'acb', 'aeb', 'aXb' ]



//2. Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest

let stringNum = '2 + 3 233 2223';
let re = /2 \+ 3/g // экранирую символ "+"! ставлю флаг -g для поиска по всей строке
console.log(stringNum.match(re));


//3. Get the day, month and year of the current date and output it to the console separately

let today = new Date(); // создала объекст "дата"
console.log(today); //2022-08-10T18:25:29.171Z
console.log(today.getHours()); //получить время в текущем часовом поясе
console.log(today.getFullYear()); // получить год
console.log(today.getDate()); //получить число
console.log(today.getDay()); // получить день

// получу день недели в виде текста

function NameWeekDay() {
    let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']; // массив с днями недели, начиная с воскресенья
    return days[today.getDay()]; // возвращаю значение в виде номера элемента массива
  }
 console.log( NameWeekDay(today) );