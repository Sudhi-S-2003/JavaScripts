
let sum=0;
const num=[2,5,10];
// for(let i=0;i<num.length;i++){
//     sum+=num[i];
// }
// console.log(sum)
// num.forEach((item)=>{
//     sum+=item;
// });
// console.log(sum);
const arr=[
    {name:"john",age:20,gen:'M'},
    {name:"appu",age:22,gen:'M'},
    {name:"ammu",age:22,gen:'F'},
    {name:"anagha",age:22,gen:"F"},
]
// //return all names
// arr.forEach((item)=>{
//     console.log(item.name);
// }
// )
//return all females
// arr.forEach((item)=>{
//     if (item.gen=="F"){
//         console.log(item.name);
//     }
// })
let maparray=arr.map((itm)=>{
    return {
        ...itm,
        age:itm.age+1,
        new:"new value"
    }
})
// console.log(maparray)
let reduce=arr.reduce((acc,itm)=>{
    // console.log(acc,itm)
    return acc+itm.age;
},0)
// console.log(reduce)

let filter=arr.filter((itm)=>{
    return itm.age==22
    })
    // console.log(filter)
let find=arr.find((itm)=>{
    return itm.age==22;
})
// console.log(find)

let product=arr.reduce((acc,itm)=>{
    return acc*itm.age;
},1)
// console.log(product)