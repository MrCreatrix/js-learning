// const myArr = [0, 1, 2, 3, 4, 5] 
// const myHeors = ["shaktiman", "naagraj"]

// const myArr2 = new Array(1, 2, 3, 4)
// console.log(myHeors.values());

// const fruits = [];
// fruits.push("banana", "apple", "peach");
// console.log(fruits); // 3

// fruits[5] = "mango";
// console.log(fruits[5]); // 'mango'
// console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
// console.log(fruits.length); // 6


// const myArr = new Array(1, 2, 3, 4)

// myArr.includes(5)
// console.log(myArr);


// myArr2.push(5)
// myArr2.pop()
// console.log(myArr2);

// myArr2.unshift(9)
// console.log(myArr2);
// myArr2.shift()
// console.log(myArr2);

// const aArray = myArr.join() 
// console.log( typeof aArray);

// slice or splice
// console.log("A ", myArr);
// const myn1 = myArr.slice(1,3)
// console.log(myn1);
// console.log("B ", myArr);


// const myn2 = myArr.splice(1,3)
// // splice is manupulated original array 
// console.log(myn2);
// console.log("C ", myArr);


const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// const test = marvel_heros.concat(dc_heros)


// console.log(test);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3));