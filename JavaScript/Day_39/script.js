// Question - 1 - create a function to print hello world

// function hello(){
//     console.log("Hello World");
// }
// hello();

// Question - 2 - greet functiion with a name
// function greet(name = "Guest"){
//     console.log(`hello ${name}`);
    
// }
// greet("Deepesh");

// Question - 3 - Add unlimited number

// function addNum(...val){
//     let sum = 0;
//     val.forEach(function(val){
//         sum += val;
//     });
//     return sum;
// }

// console.log(addNum(1,2,3,4,4,2,2,1));


// Question - 4 - 
// (function(){
//     console.log("I run instantly!");
// })();


// question - 5 

// function parent(){
//     let a = 12;
//     function child(){
//         console.log(a);
//     }
//     child();
// }
// parent();


// Question - 6 

// let arr = [1,2,3,4,5];

// for(let i = 0 ; i< arr.length ; i++){
//     console.log(arr[i]);
// }


// Question - 7

let obj = {
    name : "Deepesh",
    age : 20,
    city : "Bhopal",
};

for(let key in obj){
    console.log(obj[key]);
}