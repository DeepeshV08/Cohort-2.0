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
// if(start > end) console.error("Start cannot be bigger than this");
// for(let i = start ; i<= end ; i++){
//     console.log(i);
// }

// Question 17

let count = 0;

for(let i = 1; i< 21 ; i++){
    if(count == 3){
        break;
    }
    if(i % 2 !== 0){
        count++;
        console.log(i);
    }
}