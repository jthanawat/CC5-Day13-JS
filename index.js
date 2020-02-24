// เพิ่มเติมใน class
// let user = {
//     name: "Thanawat",
//     age: 30,
//     "computer skill": null
// };

// user.height = 160;
// user.IsSingle = true;
// console.log(user);
// console.log(user["computer skill"]);
// alert(user.name);

// delete user.name
// console.log(user);

//Exercise 
// let human = {};

// human.name = "Thanawat",
// human.age = 24,
// human.group = "Nat",
// human.IsSingle = true,
// human["Intelligent Score"] = 4

// console.log(human);


//Exercise

// let obj = {};
// let key;
// let value;

// while (key !== "stop" || value !== "stop") {
//   key = prompt("Enter key");
//   if (key == "stop") {
//     break;
//   }
//     value = prompt("Enter value")
//     if (value == "stop") {
//       break;
//     }
//   obj[key] = value;
// }

// console.log(obj);

// เสริม
// let key = prompt("Key");
// let value = prompt("Value");

// let obj = {};

// obj[key] = value;
// obj["age"] = 19;

// console.log(obj);

// let obj = {};

// while(true) {  
//   let propertyName = prompt("Enter property's Name");
//   if (propertyName == "stop") break;
//   let propertyValue = prompt("Enter property's Value");
//   obj[propertyName] = propertyValue;
// }

// console.log(obj);

// let v1 = "firstName"
// let user = {};


// user[v1] = "Thanawat";
// user["lastName"] = "J";
// user["age"] = 24;
// user["height"] = 160;


// Exercise 2

// let fruit = {};
// let key;
// let value;

// while (true) {
//   key = prompt("Enter fruit's name");

//   if (key == "stop") {
//     break;
//   }

//   value = Number(prompt("Enter fruit's amount"));

//   if (value > 1) {
//     fruit[key + "s"] = value;
//     console.log(fruit);
//   } else {
//     fruit[key] = value;
//     console.log(fruit);
//   }
// } 

// Exercise

// const obj = {
//   name: "thanawat",
//   age: 24,
//   height: 160,
//   weight: 46,
// }

// let clone = {}; //// Object.assign({}, obj);

// for (let key in obj) { 
//   clone[key] = obj[key];
// }
// clone.name = "kla";

// console.log(clone.name);


// Exercise 

let obj = {};
obj.name = "Sonter";
obj.surname = "Pakorn";
obj.name = "Boy";
delete obj.name;


// Exercise 

function isEmpty(obj) {
  let isEmpty = true;
  for (let key in obj) {
    isEmpty = false;
  }
  return isEmpty;
}
//test
let obj = {

}

// Exercise
// ans. ไม่ Error

const user = {
  name: "John"
};

// does it work?
user.name = "Pete";


// Exercise

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

function sum(salaries) {
let sum = 0;
  for (let key in salaries) {
    sum = sum + salaries[key];
  }
  return sum;
}
console.log(sum(salaries))



//Exercise
function multiplyNumeric(obj, times) {
  for (let key in obj) {
    if (typeof (obj[key]) == "number") {
      obj[key] *= times;
    }
  }
  return obj;
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

console.log(multiplyNumberic(obj, 2));



// Clone
const obj = {
  name: 'sonter',
  age: 18,
  height: 196,
  weight: 70,
}

const obj2 = {
  name: 'Nat',
  weight: 98
}

const obj3 = {
  name: 'Tle',
  skill: "nodejs"
}

const obj4 = {
  name: 'Kla',
  address: 'Thailand'
}

Object.assign(obj3, obj, obj2, obj4);

console.log(obj3);

console.log(obj);

console.log(obj2);
