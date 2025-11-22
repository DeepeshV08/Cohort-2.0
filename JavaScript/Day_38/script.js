
// let arr = [1,2,3,4,5,6];

// function abcd(...val){
//     console.log(val);
// }
// abcd(arr);

// let arr = [1,2,3,2,1];
// arr.push(6);
// arr.pop();

// arr.shift(8);
// arr.unshift(10);
//  function abcd(...val){
//     console.log(val);
// }
// abcd(arr);


let arr = [1,2,3,4,5];

//  let arr2 = arr.filter(function(val){
//     return val > 3;
// });
// console.log(arr2)

let arr2 = [...arr]; // spread operator

// for(let i = 0 ; i< arr.length ; i++){
//     console.log(arr[i]);
// }


// arr.forEach(function(val){
//     console.log(val);
// })


// Object understanding

let obj = {
    name : "Deepesh",
    age : 20,
    email:"deepesh@gmail.com",
    city:"Bhopal"
};

console.log(obj);
console.log(obj['name']);
let obj1 = new Object();
obj1.name = "deepesh";
console.log(obj1)