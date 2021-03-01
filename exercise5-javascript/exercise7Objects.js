var user = {
    name: "John",
    age: 34,
    hobby: "Soccer",
    isMarred: false,
    spells: ["Boom", "swish", "ahh"], // array in the object
    shout: function () {
        console.log("AHHH"); // method
    }
};

user.name;
user.hobby;

// add 
user.favoriteFood = "Potato";

// modify
user.isMarred = true;


// List with Objects
var list = [
    {
        username: "andy",
        password: "secret"
    },
    {
        username: "jess",
        password: "123"
    }
]