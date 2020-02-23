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

// let user = {};

// user.name = "Sonter";
// user.surname = "Pakorn";
// user.name = "Boy";
// delete user.name;

// Exercise 

// function isEmpty(obj) {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// }

// Exercise
// ans. สามารถทำได้ 

// const user = {
//   name: "John"
// };

// // does it work?
// user.name = "Pete";

// Exercise

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

function sum(salaries) {
  for (let key in sum) {
    sum += salaries[key];
  }
}
alert(sum);