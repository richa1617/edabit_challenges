/*
console.log(Number.isNaN("45")) //true

//Returns true if the argument coerces to NaN, otheriwse false
console.log(isNaN(45))  // false  aks urself is 45 not a number ? false,45 is an number
console.log(isNaN(0)) //false
console.log(isNaN("1")) //false   string 1 is converted to 1
console.log(isNaN(true)) //false //true is converted to 1
console.log(isNaN(null)) //false 
console.log(isNaN([])) //false 
console.log(isNaN("")) //false  
console.log(isNaN(" ")) //false  
console.log("_______________________")
console.log(isNaN("hello")) //true   is hello not a number
console.log(isNaN(undefined)) //true 
console.log(isNaN({})) //true
console.log(isNaN(NaN)) //true


console.log("_______________________")
console.log(Number.isNaN("hello")) //false
*/

// program using switch statement
let a = "2";

switch (a) {

    case 1:
        a = 'one';
        break;
    case 2:
        a = 'two  ';
        break;
    default:
        a = 'not found';
        break;
}
console.log(`The value is ${a}`);