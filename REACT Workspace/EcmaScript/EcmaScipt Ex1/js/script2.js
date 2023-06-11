//let keyword

//Example 1
let x = 10;
//let x = 20;

console.log("First variable let x = " + x);
console.log("Re-Declaration of let variable x = " + x);


//Example 2

for(var i=1;i<=2;i++)
{
    let y = i+1;
}

console.log("outside for loop, let variable y = " + y);


//Example 3
let v = 100;
v = 200;

console.log("First let variable v = " + v);
console.log("Reassignment of let variable v = " + v);


//Example 4

function test()
{
    let b = 199;
}

test();

console.log("outside test function, variable b = " + b);



/* Note

1. "Re-Declaration" is not allowed using "let" keyword 
2. "let" keyword varible scope is "block" scope. ie. declaration limited inside 
   if, else, while, for, function blocks
3. "Re-Assignment" is valid using "let" keyword
*/


