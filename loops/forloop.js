/* 

For loop

Loops offer a quick and easy way to do something repeatedly.

*/
const myArr = ['Shailesh', 'bala', 'viral', 'nilesh', 'ajay', 'jiger']

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);

}

for (let i = 0; i < 10; i++) {
    const element = i;
    // console.log(element);
}

for (let i = 0; i < 10; i++) {

    if (i == 0) {
        continue;
    }
    // console.log(`outer loop: ${i}`);

    for (let j = 0; j < 10; j++) {
        // console.log(`Inner loop: ${j} & outer loop ${i}`);
        //  console.log(i + '*' + j + ' = ' + i*j );
    }

}

// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log(`Detected 5`);
        break
    }
//    console.log(`Value of i is ${index}`);
    
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}