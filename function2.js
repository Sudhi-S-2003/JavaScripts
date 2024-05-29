let global1=10;
var global2="10";
const global3= true;
 
function fun1(){
    let local1=20;
    var local2="100";
    const local3= false;
    console.log("Inside Function Global variable ",global1,global2,global3)
    console.log("Inside Function local variable ",local1,local2,local3)
}
fun1()
console.log("Outside Function Global variable ",global1,global2,global3)
// console.log("Outside Function local variable ",local1,local2,local3)