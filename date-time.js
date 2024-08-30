let myDate = new Date();
// console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());

// console.log(typeof myDate);

// let newDate = new Date(1998,0,4);
// console.log(newDate);
// console.log(newDate.toDateString());
// console.log(typeof newDate);

let newBirthDate = new Date("1998-01-04");
// console.log(newBirthDate.toLocaleString());


// ------------------------------------------------

let myTimeStamp = Date.now()
// console.log(Math.floor(myTimeStamp / 1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
