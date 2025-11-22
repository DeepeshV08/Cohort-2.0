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

// let obj = {
//     name : "Deepesh",
//     age : 20,
//     city : "Bhopal",
// };

// for(let key in obj){
//     console.log(obj[key]);
// }



// Revision 

// Question 1

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(1,5));


// Question - 2

// function greet(guest = "guest"){
//     console.log(`hello ${guest}!`);
// }
// greet();


// Question - 3
// let sum = 0;
// function addUnl(...a){
//     a.forEach(function(val){
//         sum += val;
//     })
//     return sum;
// }
// console.log(addUnl(1,2,3,6,2,1));

// Second way of doing it
// function addUn(...nums){
//     let sum = 0;
//     for(let i = 0 ; i< nums.length ; i++){
//         sum += nums[i];
//     }
//     return sum;
// }
// console.log(addUn(1,2,3,6,2,1));

// third way of doing it

// function addUnl(...nums){
//    let ans = nums.reduce(function(acc,val){
//         return acc+val;
//     },0);
//     console.log(ans);
// }
// addUnl(1,2,3,2,1);

// Question - 4

// (function(){
//     console.log("I run instantly!")
// })();


// Question - 5

// function first(){
//     let a = 10;
//     function secound(){
//         console.log(a);
//     }
//     secound();
// }
// first();

// Question - 6 & 7

// let fruit = ["banana","apple","mango","grapes","pineapple"];

// fruit.push("guava");
// console.log(fruit);

// fruit.pop();
// console.log(fruit);

// for(let i = 0 ; i< fruit.length ; i++){
//     console.log(fruit[i]);
// }

// question - 8

// let obj = {
//     name : "Deepesh",
//     age : 20,
//     email : "deepesh@gmail.com",
//     city : "Bhopal",
// };

// console.log(obj.age);

// for(let key in obj){
//     console.log(obj[key]);
// }


// Set time out

// setTimeout(() => {
//     console.log("time is uppp");
// }, 2000);