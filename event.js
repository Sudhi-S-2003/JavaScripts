document.getElementById("clk1").onmouseenter=function(e){
    if (this.innerText=="mouse enter"){
        this.innerText="on click";
    }else{
    this.innerText="mouse enter";
    }
}
document.addEventListener('DOMContentLoaded',()=>{
   let loadtime=new Date;
    document.getElementById('time').innerHTML="<b>Page loadtime :</b> "+loadtime;
});

document.getElementById('text1').addEventListener('keyup',function(){
    document.getElementById('label1').innerText=this.value;
});

document.getElementById('clk1').addEventListener('click',function(){
    this.innerText="clicked";
});