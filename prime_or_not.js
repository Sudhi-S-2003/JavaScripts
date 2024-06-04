function check(){
   let val= document.getElementById('val').value;
   let i;
   for (i=2;i<=parseInt(val/2);i++){
    if (val%i == 0){
        document.getElementById('result').innerHTML = "Not Prime";
        break;
    }
   }
   if (i>parseInt(val/2)){
   document.getElementById('result').innerHTML = "Prime";
   }
}
