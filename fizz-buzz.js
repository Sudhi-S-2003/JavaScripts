document.getElementById('num').onchange=function(e){
    let val=this.value;
    console.log(val);
    if (val%5==0 && val%3 ==0 ){
        document.getElementById('result').innerHTML="FizzBuzz";
    }
    else if( val%3==0){
        document.getElementById('result').innerHTML="Fizz";
    }
    else if( val%5==0){
        document.getElementById('result').innerHTML="Buzz";
    }
}