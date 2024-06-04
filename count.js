let text="gghgh hhh hhgg ndrd";

let num=text.split(" ").length;
let cou=text.split(" ").reduce((accelerator,currentvalue)=>accelerator+1,0);

console.log(cou);