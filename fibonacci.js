let limit=7;
num1=-1;
num2=1;
for (i=0;i<limit;i++){
let num=num1+num2;
num1=num2;
num2=num;
    console.log(num);
}
