// function main(){
// console.log('main function');
// callback();
// }
// function callback(){
//     console.log("Callback executed");
// }
// main();

// // function main(callback){
// //     callback();

// //     console.log('main function');
// //     }
// //     function callback(){
// //         console.log("Callback executed");
// //     }
// //     main(callback);


//higher order function

function greet(calling){
    calling();
}
function welcome(){
    console.log("Welcome");
}
greet(welcome); 