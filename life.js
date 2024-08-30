
// IIFE


function db(){
    console.log("DB connected");
}
db();


(function db(){
    console.log("DB connected");
})();
