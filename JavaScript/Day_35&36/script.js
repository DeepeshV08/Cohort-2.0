// let pass = "Deepesh"

// let currPass = prompt("Enter your Password");

// if(currPass === pass){
//     console.log("Done");
// }else{
//     let second = prompt("doosra pass");
//     if(second == pass){
//         console.log("Done");
//     }else{
//         let third = prompt("thisra pass");
//         if(third == pass){
//             console.log("Done")
//         }else{
//             console.error("Account blocked")
//         }
//     }
// }


// let sahiPass = "Deepesh";
// let attempt = 0;
// let currPass = prompt("Enter your password");
// attempt++;
// while(attempt < 3 && sahiPass !== currPass){
//     currPass = prompt("Enter your passWord");
//     attempt++;
// }

// if(attempt === 3 && sahiPass !== currPass){
//     console.error("Account locked");
// }else{
//     console.log("Done");
// }



// Question  12

// let userInput = prompt("Enter words");
// let count = 0;
// while(userInput !== "stop"){
//     if(word === "yes"){
//         count++;
//     }
//     userInput = prompt("Enter words");
// }

// Question 13

// for(let i = 1 ; i< 51 ; i++){
//     if(i % 7 === 0){
//         console.log(i);
//     }
// }

// Question 14

// let sum = 0;
// for(let i = 1 ; i< 31 ; i++){
//     if(i % 2 !== 0) {
//         sum += i;
//     }
// }
// console.log(sum);

// Question 15

// let num = prompt("Enter a number");
// num = Number(num);

// while(num % 2 !== 0){
//     if(num % 2 === 0){
//         break;
//     }
// }


// Question 16

// let start = +prompt("Enter a starting number");
// let end = +prompt("Enter a ending number");
// if(start > end) console.error("Start cannot be bigger tgithan this");
// for(let i = start ; i<= end ; i++){
//     console.log(i);
// }

// Question 17

// let count = 0;

// for(let i = 1; i< 21 ; i++){
//     if(count == 3){
//         break;
//     }
//     if(i % 2 !== 0){
//         count++;
//         console.log(i);
//     }
// }

// Question 18

// let counter = 0;
// for(let i = 1; i< 6 ; i++){
//     let num= prompt("Enter a number");
//     if(num >= 0){
//         counter++;
//     }
// }
// console.log(counter);

// Question 19
// Atm simulator - balance = 1000

// let balance = 1000;
// let flag = false;
// let counter = 0;
// while(balance > 0 && counter!== 3){
//     let withdraw = +prompt("kitna amount withdraw karna hai ");
//     counter++;
//     if(withdraw <= balance){
//         balance -= withdraw;
//     }else{
//         flag = true;
//         break;
//     }
// }
// if(flag === true){
//     console.log("Insufficient balance");
// }
// console.log(balance);


// Recursion

// function abcd(n){
//     if(n === 0) return;
//     console.log(n);
//     abcd(n-1);
// }
// abcd(5);


// Function

// function doSomething(name , age ,address){
//     console.log(arguments[2]);
// }
// doSomething("Deepesh",20,"deepesh3950lodhi@gmail.com");


