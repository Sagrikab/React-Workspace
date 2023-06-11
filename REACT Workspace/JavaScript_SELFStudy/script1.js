// Nested Functions

let key=42;

function generateValue(value){
    let keySecretCode=function(){
        let key=12;
       console.log('in keySecretCode',key);
        return key;
    }
let code=value*keySecretCode();
console.log('inside generateValue: ',key);
return code;

}
let secretCode=generateValue(2);
//showMessage(secretCode);
//console.log(secretCode);


// let key=42;

// function generateValue(value){
//     let keySecretCode=function(){
//         key=12;
//        console.log('in keySecretCode',key);
//         return key;
//     }
// let code=value*keySecretCode();
// console.log('inside generateValue: ',key);
// return code;

// }
// let secretCode=generateValue(2);
// //showMessage(secretCode);
// console.log(secretCode);

let person={
    name:"ABC",
    age:11,
    partTime:false,
    fullTime:true,

    showInfo:function(){
        console.log(this.name);
    }
};

console.log(person.name); //object.property_name
console.log(person.age);
console.log(person.partTime);
console.log(person.fullTime);

person.age=12;
console.log(person.age);
person.showInfo();
console.log(typeof person.showInfo);

// Standard Built-in Objects

let now=new Date();
console.log(now.toDateString());

console.log(Math.abs(-11));
console.log(Math.random())

let s="Hello"
console.log(s.charAt(0));