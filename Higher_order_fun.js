function calculation(a,b,operation){
return operation(a,b)
}
function add(a,b){
return a+b;
}
console.log(calculation(10,20,add))