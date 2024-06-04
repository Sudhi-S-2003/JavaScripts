let array1=[20,66,80,99,59,90,88,100,89];
let muliple_of_10=array1.filter((a)=>{
    return a%10 ==0;
});
console.log(muliple_of_10);

let odd_number=array1.filter((a)=> a%2 ==1);
console.log(odd_number);