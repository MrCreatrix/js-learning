// IIFE Imedialty Invok function Expression


// function db(){
//     console.log("DB connected");
// }
// db();


(function db(){
    /*  named IIFE */
    console.log("DB connected");
})();

((name)=>{
    console.log(`DB connected Two ${name}`);
})('Bala');