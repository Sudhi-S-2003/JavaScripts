function calculation(getparm){
    
getparm.sum();
getparm.mul();
}
function  getparm(a,b){

function sum(){
    console.log( a+b)
   }
   function mul(){
    console.log(a*b)
   }
    return {
        sum: sum,
        mul: mul
    };
  
}
 calculation(getparm(10,20))