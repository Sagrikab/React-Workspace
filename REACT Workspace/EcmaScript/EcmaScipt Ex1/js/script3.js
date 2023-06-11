//const keyword

//Example 3

for(let i=1;i<=2;i++)
{
    const z = 107;
}

//console.log("outside for loop, const z = " + z);



//Exmaple 2

const e = 10;
e = 20;

console.log("const e = " + e);
console.log("reassignment of e = " + e);



//Example 1
// const x = 100;
// const x = 140;

// console.log("First declaration of const x = " + x);
// console.log("Second declaration of const x = " + x);




/* 
    Notes
    1. "Redeclaration" not allowed using const keyword
    2. "Reassignment" not allowed using const keyword
    3. "const" keyword varible scope is "block" scope. ie. declaration limited inside 
         if, else, while, for, function blocks     
*/