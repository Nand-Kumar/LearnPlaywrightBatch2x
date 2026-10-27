// let - Block scoped
let a = 10;

let retryCount = 0;
retryCount = retryCount + 1;
retryCount = retryCount + 1;
console.log( "Retry attempt:", retryCount);

//let retryCount = 5;  // SyntaxError: Identifier 'retryCount' has already been declared
// re-declation is not allowed with let

let testStatus = "pending";

if(testStatus == "pending"){
let executionTime = 1200;
console.log("inside block:", executionTime); // 1200
}

console.log(executionTime); // ReferenceError: executionTime is not defined - block scoped