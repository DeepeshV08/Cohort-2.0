// Function in js


// -Parameter required in js -[`required` , `destructured` , `rest` , `default  ];

// required parameter - if tumne value nhi bheji to usme undefined ho jati hai value by default

// function abcd(a,b,c){
//     // code
// }

// abcd();
// destructered - 
// function abcd({name , age}){
//     console.log(name , age);
// }
// abcd({name :"deepesh", age :20});

// rest

// function abcd(...val){
//     console.log(val);
// }
// abcd(1,2,3,4);


// default

// function abcd(a= 0 , b = 0){
//     console.log(a ,b);
// }
// abcd(2,3);

// Arguments in Js - Positional , default , spread

// positional
// function abcd(a , b , c ,d){
//     console.log(a,b,c,d);
// }

// abcd(1,2,3,4);

// spread

// function abcd(a,b,c,d){
//     console.log(a,b,c,d);
// }
// let arr = [1,2,3,4];
// abcd(...arr);



// Nesting function
// function abcd(){
//     function defg(){
//         console.log("Hello Deepesh");
//     }
//     defg();
// }
// abcd();

// Scope chain

// let a = 12;
// function abcd(){
//     let b = 13;
//     function defg(){
//         console.log(b);
//     }
//     defg();
// }
// abcd();


// Understanding Immediately Invoked Function Expression (IIFE)

// (function(){
//     let balance = 5000;
// })();


// Arrow function

// let a = ()=>{
//     console.log("heyheyheyhey");
// }
//  a();

// anonymous function

// function(){

// }


// higher order funtion (HOF)

// function abcd(){
//    return function(){
//         console.log("Hlw");
//     }
// }
// abcd()();





// Revisionnnnn

// function aaloKaParatha(){
//     console.log("🫓🫓")
// }
// aaloKaParatha();

// function abcd(parameter){
//     console.log("Hello");
// }

// abcd(arguments);



// function abcd(a,b,...c){
//     console.log(a,b,c);
// }
// abcd(1,2,4,2,1);

// Hoisting
// abcd();
// function abcd(){
//     console.log("hello world");
// }


// let a = function(){
//     console.log("hello world");
// }
// a();


// let a = ()=>{
//     console.log("Hello world");
// }
// a();


