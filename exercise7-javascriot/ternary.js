// condition ? expr1 : expr2;

function isUserValid(bool) {
    return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access Denied"; // returns you may enter

var automatedAnswer = "Your account # is " + (isUserValid(false) ? "1234" : "not available"); // returns not available

