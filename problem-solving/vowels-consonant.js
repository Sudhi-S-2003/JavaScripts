let a="this is a yutu88";
const vol=["a","e","i","o","u"];
let vol_count=0;
let con_count=0;
a.split('').forEach(element => {
    if(vol.includes(element)){
vol_count++;
}
else if (element.match(/[a-z]/i)) {
    con_count++;
}
});
console.log("consonant count: ",con_count);
console.log("vowels count: ",vol_count);

