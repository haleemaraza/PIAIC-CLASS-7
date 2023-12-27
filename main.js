"use strict";
// union type 
// by using this sign "|" we can add multiple type of data in one variable
let a = " sadia ";
// a = 10 
// a = "sadia"
// a = true
let age_ = "28";
console.log(typeof age_);
// narrowing
let age;
age = 28;
console.log(age.toFixed(2));
// wrong method
let _age = 2;
// if (typeof _age ==="string") {
//     _age.toUpperCase()
// }else {
//     _age.
// }
// correct method
console.log(Math.random());
let newAge = Math.random() > 0.1 ? 28 : "6";
if (typeof newAge === "string") {
    console.log(newAge.toUpperCase());
}
else {
    console.log(newAge.toFixed(2));
}
// we can't change the type 
let trafficLigth = "green";
console.log(trafficLigth);
// objects 
let teacher = {
    name: "Sadia ",
    salary: 15000,
    "full-name": "Haleema Sadia"
};
teacher.name;
console.log(teacher["full-name"]);
let student1 = {
    name: "Arfa",
    age: 18
};
let student2 = {
    name: "Aylin",
    age: 28
};
let ArfaOrder = {
    food: "Biryani"
};
let AylinOrder = {
    food: "Biryani",
    drink: "Coke"
};
ArfaOrder = AylinOrder; // NO ERROR // ignoring extra property
// AylinOrder=ArfaOrder // ERROR - MISSING PROPERTY
