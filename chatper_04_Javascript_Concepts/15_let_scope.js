let a =10; // Global scope
console.log(a)

// Defination of the function
function printHello() {
    console. log("Hello TheTestingAcademy!");
    let a = 20; // Local Scope
    console. log(a);
    if (true) {
        let a = 30;
        console. log(a); // 30  
    }
console. log("F →>", a) ;
}

console. log("G →>", a) ;

printHello();

// Javascript is a funny language. it doesn't follow its own rules 
