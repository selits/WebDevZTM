// Default arguments

function greet(names2 = '', age = 30, pet = 'cat') {
    return `Hello ${names2} you seem to be ${age - 10}.  What a lovely ${pet} you have`;
}