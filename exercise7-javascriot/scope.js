// scope

// Root Scope (window)

var fun = 5;

function funFunction() {
    // child schope
    var fun = "Hello!!";
    console.log(1, fun);
}

function funerFunction() {
    // child schope
    var fun = "Bye!!";
    console.log(2, fun);
}

function funestFunction() {
    // child schope
    fun = "AHHHH!!!";
    console.log(3, fun);
}

console.log("window", fun);
funFunction();
funerFunction();
funestFunction();