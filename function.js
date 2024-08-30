// function


function addTwoNumber(n1,n2){
    let result = n1 + n2;
    return result
}
const result = addTwoNumber(5,4);

// console.log("result =>> ",result);

function loginUserMessage(username){

    if (username) {
        
    }
    return `${username} just login`;
}

const loginUser  = loginUserMessage('shailesh');
// console.log(loginUser);

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))

