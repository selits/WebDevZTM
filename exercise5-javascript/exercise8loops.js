var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];


// for loop (i starts off at 0; if i --which is 0 atm-- is less than the length of the array then run the loop; the increment i and stop at the lengnth of i) 
var todosLength = todos.length;
for (var i = 0; i < todosLength; i++) {
    todos[i] = todos[i] + "!";
};

todos.forEach(function (todo) {
    console.log(todo);
});


var counterOne = 0;
while (counterOne < 10) {
    console.log(counterOne);
    counterOne++;
}


var counterTwo = 10;
do {
    console.log(counterTwo);
    counterTwo--;
} while (counterTwo > 0);


