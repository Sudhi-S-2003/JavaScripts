// // let a={};
// let a=new Object();
// a.firstname="appu";
//console.log(typeof a)
const address={
    street:"123 Main St",
    country:"India",
    city:"tvm",
}
const person={
    name:"john",age:20,gen:'M',address:address,sentence:function(){
        return this.name +" is a " +this.age +" year old "+  this.gender; 
    }
}
console.log(typeof person)
console.log(person.name)
console.log(person['gen'])
person.age=25;
person.company="Tcs";
delete person.gen
person["gender"]="Boy"
console.log( person)
console.log(person.sentence())