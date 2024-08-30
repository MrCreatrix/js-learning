// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(JsUser);

JsUser.greeting = function(){
    console.log('Hello world');
}

JsUser.greeting2 = function(){
    console.log(`i am ${this.name}`);
}

console.log(JsUser.greeting2());


