// JS Engine
// LINE BY LINE, , JIT Compilation
// Hoising takes all  declarations to the top of the scope of the block it belongs to

console.log(greeting) ;
var greeting = "Hello";
console.log(greeting);

// Behind the scenes:
// var greeting;           <-- hoisted with undefined
// console.log(greeting);  <-- undefined
// greeting = "Hello!      <-- assignment stays in place
// console.log(greeting);   <—- "Hello!"

console.log(a);
var a = "Nand";
console.log(a);