// * Numbers *
//Exercise
let num = 1.23456;
alert(Math.floor(num * 100) / 100);

//Exercise
function random(min, max) {
  return Math.random() * (max - min) + min;     //max-min ดู range ที่ random เลื่อนมา 1,5 โดย + min
}

alert(random(1, 5));


// * Strings *
//Exercise 1
function ucFirst(string) {
  return string[0].toUpperCase() + string.slice(1);
}

alert(ucFirst("john"));

//Exercise 2
function checkSpam(str) {
  str = str.toLowerCase();
  if (str.includes("xxx") || str.includes("viagra")) return true;
  return false;
}

let checkSpamByIsa =

  checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false

//Exercise 3
function truncate(str, maxlength) {
  if (str.length <= maxlength) {
    return str;
  }
  return str.slice(0, maxlength - 1) + "...";
}

truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"
truncate("Hi everyone!", 20) = "Hi everyone!"

//Exercise 4
function extractCurrencyValue(string, rate) {
  return Number(str.slice(1)) * rate;
}

alert(extractCurrencyValue('$120', 30.5) === 3660); // true



// * Array *
// Exercise 1
let fruits = ["Apples", "Pear", "Orange"];

let shoppingCart = fruits;
shoppingCart.push("Banana");

alert(fruits.length); // 4

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

  while (true) {
    let value = prompt("input value");

    if (value === "" || !value || isFinite(value)) break;
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

  for (let number of arr) {
    sum += number
  }
  return sum;
}

sumInput();

// * Array methods *
// Lab
Array.prototype.klaForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this, "KLA");
  }
}

["google", "yahoo", "safari"].klaForEach(function (element, index, arr, user) {
  console.log(`element = ${element} `);
  console.log(`index = ${index} `);
  console.log(`arr = ${arr} `);
  console.log(`user = ${user} `);
})

//Exercise array: map
// Exercise 1.1
let array1 = [1, 2, 30, 400];

let array2 = array1.map(item => item * 2);

console.log(array2); //      array2 [2, 4, 60, 800]


//Exercise 1.2
let array1 = [1, 2, 3, 4];

let array2 = array1.map(item => String(item));

console.log(array2); //      array2 ["1", "2", "3", "4"]


//Exercise 1.3
let array1 = [1, "1", 2, {}];

let array2 = array1.map(item => typeof (item));

console.log(array2); //      array2 ["number", "string", "number", "object"]


//Exercise 1.4
let array1 = ["apple", "banana", "orange"];

let array2 = array1.map(item => item.toUpperCase());
// let array2 = array1.map(function(item) {
//   return item.toUpperCase();
// })

console.log(array2); //      array2 ["APPLE", "BANANA", "ORANGE"]


//Exercise 1.5 
let array1 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 },
];

let array2 = array1.map(item => item.name);

console.log(array2); //    array2 ["apple", "banana", "watermelon"]


//Exercise 1.6
let array1 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 },
];

let array2 = array1.map(item => item.age);

console.log(array2); //    array2 [14, 18, 32]     


//Exercise 1.7
let array1 = [
  { name: "apple", surname: "London" },
  { name: "banana", surname: "Bangkok" },
  { name: "watermelon", surname: "Singapore" },
];

let array2 = array1.map(item => item.name + " " + item.surname);

console.log(array2); // array2 ["apple London", "banana Bangkok", "watermelon Singapore"]


//Exercise 1.8
let array1 = [1, 3, 4, 5, 6, 7, 8];

let array2 = array1.map(item => item % 2 == 0 ? "even" : "odd");

console.log(array2); //array2 ["odd", "odd", "even", "odd", "even", "odd", "even"]


//Exercise 1.9
let array1 = [1, -3, 2, 8, -4, 5]

let array2 = array1.map(item => Math.abs(item));

console.log(array2); //array2 [1, 3, 2, 8, 4, 5]


//Exercise 1.10
let array1 = [100, 200.25, 300.84, 400.3];

let array2 = array1.map(item => String((item.toFixed(2))));

console.log(array2);//array2 ["100.00", "200.25", "300.84", "400.30"]


//Exercise 1.11
let array1 = [
  { name: "apple", birth: "2000-01-01" },
  { name: "banana", birth: "1990-10-01" },
  { name: "watermelon", birth: "1985-12-01" },
]

// let array2 = array1.map(function (item) {
//   let array = item.birth.split("-");
//   item.age = 2020 - array[0];
//   console.log(array);  // ["2000", "01", "01"], ["1990", "10", "01"], ["1985", "12", "01"]
//   return item;
// })

let array2 = array1.map((item) => {
  item.age = 2020 - item.birth.split("-")[0];
  return item;
})

let array2 = array1.map((item) => ({ ...item, age: 2020 - item.birth.split("-")[0] }))

console.log(array2);
// array2 
//   { name: "apple", birth: "2000-01-01", age: 19 },
//   { name: "banana", birth: "1990-10-01", age: 29 },
//   { name: "watermelon", birth: "1985-12-01", age: 33 },
// ] 

//In-class
// let now = new Date("2020-02-27");
// let birth = new Date("1995-08-13");

// let age = now.getTime() - birth.getTime();

// 3600*24*365 = 31536000

// age = age / 1000
// age / 31536000


//Exercise 1.12
let array1 = [
  { name: "apple", birth: "2000-01-01" },
  { name: "banana", birth: "1990-10-10" },
  { name: "watermelon", birth: "1985-12-30" },
];


//By P'X
let array2 = array1.map(function (item) {
  let date = new Date(item)
    .toString()
    .slice(4)
    .split(' ')
  return `
  <tr>
  <td>${item.name}</td>  
  <td>${date[1]} ${date[0]} ${date[2]}</td>
  </tr>
  `
})

// ---------------------------------------
let array2 = array1.map((item) => {
  return (
    `<tr>
          <td> ${item.name}</td>
          <td> ${birthDay}</td>
    </tr>
    `
  );
})

let date = new Date(2000 - 01 - 01)
console.log(date);
console.log(date.getDate());
console.log(date.getFullYear());
console.log(date.getMonth());

let month = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
let Month = month.filter((item, index) => index == date.getMonth())
console.log(Month);

birthDay = date.getDate() + " " + Month[0] + " " + date.getFullYear()
console.log(birthDay);

console.log(array2);
// array2 [
//     "<tr>
//       <td>apple</td> 
//       <td>01 jan 2000</td>
//      </tr>",
//     "<tr> <td>banana</td> <td>10 oct 1990</td> </tr>",
//     "<tr> <td>watermelon</td> <td>30 dec 1985</td> </tr>",
// ] 




// Exercise array: filter
//Exercise 2.1
let array1 = [1, 2, 30, 400];

let array2 = array1.filter(item => item > 10);

console.log(array2); //array2[30, 400] // filter เลขที่มากกว่า 10


//Exercise 2.2
let array1 = [1, 2, 3, 4];

let array2 = array1.filter(item => item % 2 != 0);

console.log(array2); //array2[1, 3] // filter เลขคี่


//Exercise 2.3
let array1 = [1, "1", 2, {}];

let array2 = array1.filter(item => item === Number(item)); // typeof(item) === "Number" return true;

console.log(array2); //array2[1, 2] // filter Number


//Exercise 2.4
let array1 = ["apple", "banana", "orange", "pineapple", "watermeon"]

let array2 = array1.filter(item => item.length > 6);

console.log(array2); //array2 ["pineapple", "watermeon"] // filter ตัวอักษร > 6


//Exercise 2.5
let array1 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 },
  { name: "pineapple", age: 16 },
  { name: "peach", age: 24 },
];

let array2 = array1.filter(item => item.age < 18);

console.log(array2);
// array2 [
//   { name: "apple", age: 14 },
//   { name: "pineapple", age: 16 },
// ] // filter age < 18


//Exercise 2.6
let array1 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 },
  { name: "pineapple", age: 16 },
  { name: "peach", age: 24 },
];

let array2 = array1.filter((item) => {
  item.age != 32

});

console.log(array2);
// array2 [
//   { name: "apple", age: 14 },
//   { name: "banana", age: 18 },
//   { name: "pineapple", age: 16 },
//   { name: "peach", age: 24 },
// ] // filter ไม่เอาคนที่อายุ 32


//Exercise 2.7
let array1 = [1, -3, 2, 8, -4, 5];

let array2 = array1.filter(item => item > 0);

console.log(array2); // array2 [1, 2, 8, 5] // filter เลขบวก


//Exercise 2.8
let array1 = [1, 3, 4, 5, 6, 7, 8];

let array2 = array1.filter(item => item % 3 == 0);

console.log(array2); // array2 [3, 6] // filter เลขหาร 3 ลงตัว


//Exercise 2.9
let array1 = ["peach", 1, -3, "2", {}, []];

let array2 = array1.filter(item => item === String(item));

console.log(array2); // array2 ["peach", "2"] // filter string


//Exercise 2.10
let array1 = ["APPLE", "appLE", "PEACH", "PEach"];

let array2 = array1.filter(item => item == item.toUpperCase());

console.log(array2); //array2 = ["APPLE", "PEACH"] // filter คำที่เป็นอักษรใหญ่ทุกตัว


//Exercise 2.11
let array1 = [
  { name: "apple", birth: "2001-01-01" },
  { name: "banana", birth: "1990-10-10" },
  { name: "watermelon", birth: "1985-12-30" },
  { name: "peach", birth: "2002-10-13" },
];

let array2 = array1.filter(function (item) {
  let array = item.birth.split("-");
  return array[1] == 10;
});

console.log(array2);
// array2 [
//   { name: "banana", birth: "1990-10-10" },
//     { name: "peach", birth: "2002-10-13" },
// ] // filter คนเกิดเดือน 10


//Exercise 2.12
let array1 = [
  { name: "apple", birth: "2001-01-01" },
  { name: "banana", birth: "1990-10-10" },
  { name: "watermelon", birth: "1985-12-30" },
  { name: "peach", birth: "2002-10-13" },
];

let array2 = array1.filter(function (item) {
  let array = item.birth.split("-");
  return array[0] < 2000;
});
console.log(array2);
// array2 [
//   { name: "banana", birth: "1990-10-10" },
//   { name: "watermelon", birth: "1985-12-30" },
// ] // filter คนเกิดก่อนปี 2000



//Exercise Map and Set
//Exercise 1
function unique(arr) {
  let valueSet = new Set(arr);
  let result = [];

  for (let element of valueSet) {
    result.push(element)
  }
  return result;
}

let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];

alert(unique(values));

//Exercise 2
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"


//Exercise 3


// * Keys, Values, Entities *
//Exercise 1
function sumSalaries(salaries) {
  let sum = 0;
  for(let salary of Object.values(salaries)) {
    sum += salary;
  }

  return sum;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert(sumSalaries(salaries)); // 650
console.log(sumSalaries(salaries));


//Exercise 2
function count(object) {
  return Object.keys(user).length;
}

let user = {
  name: 'John',
  age: 30
};

alert(count(user)); // 2

