// * Numbers *
//Exercise
let num = 1.23456;
alert( Math.floor(num * 100) / 100 );

//Exercise
function random(min, max) {
  return Math.random() * (max-min) + min;     //max-min ดู range ที่ random เลื่อนมา 1,5 โดย + min
}

alert( random(1, 5) );


// * Strings *
//Exercise 1
function ucFirst(string) {
  return string[0].toUpperCase() + string.slice(1);
}

alert( ucFirst("john") );

//Exercise 2
function checkSpam (str) {
  str = str.toLowerCase();
  if(str.includes("xxx") || str.includes("viagra")) return true;
  return false;
}

let checkSpamByIsa =

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false

//Exercise 3
function truncate(str, maxlength) {
  if(str.length <= maxlength) {
    return str;
  } 
  return str.slice(0, maxlength - 1) + "...";
}

truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"
truncate("Hi everyone!", 20) = "Hi everyone!"

//Exercise 4
function extractCurrencyValue(string, rate) {
   return  Number(str.slice(1)) * rate;
}

alert( extractCurrencyValue('$120', 30.5) === 3660 ); // true



// * Array *
// Exercise 1
let fruits = ["Apples", "Pear", "Orange"];

let shoppingCart = fruits;
shoppingCart.push("Banana");

alert( fruits.length ); // 4

// Exercise 2
let styles = ["Jazz", "Blues"];

styles.push("Rock-n-Roll");
console.log(styles);
styles[1] = "Classics";
console.log(styles);
styles.shift();
console.log(styles);
styles.unshift("Rap", "Raggae");
console.log(styles);

//Exercise 3
function sumInput() {

  let arr = [];

  while(true) {
    let value = prompt("input value");

    if(value === "" || !value || isFinite(value)) break;
    number.push(+value);
  } 

  let sum = 0;
  
  for (let number of numbers) {
    sum = sum + number;
  }
  return sum;
}
alert(sumInput());

//Solution Exercise3
function sumInput() {
  let arr = [];
  let number = Number(prompt("Enter Number"));

  while (isFinite(number)) {
    arr.push(number);
    number = Number(prompt("Enter Number"));
  }

  let sum = sumArray(arr);

  console.log(sum);
}

function sumArray(arr) {
  let sum = 0;
  
  for(let number of arr) {
    sum += number
  }
  return sum;
}

sumInput();

// * Array methods *
// Exercise