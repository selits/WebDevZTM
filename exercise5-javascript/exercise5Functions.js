function sayHello() {
    console.log("Hello again");
}

sayHello();


var sayBye = function() {
    console.log("Bye");
}

sayBye();


function sing() {
    console.log("AHHHHH");
    console.log("TEEEEE");
}

sing();


function sing2() {
    console.log("lallala");
    console.log("dsadsad");
}

sing2();


function sing3(song) {
    console.log(song);
}

sing3("test");
sing3("test2");
sing3("test4");

var a = function multiply(a, b) {
    if (a > 10 || b > 10) {
        return "That's too hard!";
    } else {
        return a * b;
    }
}

var total = a(4, 5);
alert(total);
