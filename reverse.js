function rev(){
    let str=document.getElementById('string1').value;
    let revStr=str.split('').reverse().join('');
    document.getElementById('result').innerHTML=revStr;
}