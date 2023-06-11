//Example 1
var x = 10;
var x = 20;

console.log("First variable x = " + x);
console.log("Redeclaration variable x = " + x);


//Example 2
var y=10;
y=30;

console.log("First variable y = " + y);
console.log("Reassignment to variable y = " + y);

//Example3

for(var i=1;i<=2;i++)
{
    var e = i+1;
}

console.log("variable e outside for loop = " + e);

//Example 4
if(true)
{
    var c = 100;
}

console.log("outside if block, var c = " + c);


//Example 5

function test()
{
    var r = 199;
}

test();
console.log("variable r outside test function = " + r);













/*
1. "Re-Declaration" is valid using "var" keyword. 
   Override new value.

2. "Re-Assignment" is value using "var" keyword.
   Override new value.

3. "var" is "function-scope" variable. ie. var declaration inside if, else, for, while
   block run as "global" declaration. but if declared inside function then scope
   remain limited to function
*/