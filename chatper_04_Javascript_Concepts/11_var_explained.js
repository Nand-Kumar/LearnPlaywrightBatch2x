
// shortcut for running alt ( option ) + shift + n 

var a= 10;

console.log(a);  // Global scope 

function printHello() {
    console.log ("hello TheTestingAcademy");
    var a = 20;     // Local scope 
    console.log(a);      // local variable has higher scope than global 

    if(true) {
        var a = 30;
        console.log(a);
    }

}

printHello();

var a = 50; 
// no error thrown for 'a' due to 'var' declaration


