var v=10;
let l = 30;
const c = 3/14 ;

var browser = "chrome";
var browser = "firefox";  // re-declaration allowed
browser = "edge"; // reassignment allowed 

// for, funcitons
var testCases = [ "login", "logout", "signup"] ;

for ( var i=0; i< testCases.length ; i++) {
    console.log("Running test:", testCases[i]);
}

console.log ("loop counter leaked outside", i);

//what is boilerplate - alias for funciton ata

console.log( "hi");
console.log("hi");
console.log("hi");

function say(){
    console.log("hi, from funciton");
}

say();
say();
