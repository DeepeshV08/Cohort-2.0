
// Question 1

// function abcd(obj){
//     console.log(obj);
// }
// abcd({name :"Deepesh" , age : 20});

// Question 2

// let obj = {
//     fnc : function(){
//         let fnc2 = () => {
//             console.log(this);
//         };
//         fnc2();
//     },
// };
// obj.fnc();

// question 3

// let arr = [1,2,3,4];

// let newArr = arr.map(function(val){
//     return val*val;
// });
// console.log(newArr);


// Question 4

// let arr = [1,2,3,5,4,5];
// let newArr = arr.filter(function(val){
//     return val % 2 == 0;
// });
// console.log(arr);
// console.log(newArr);


// Question 5

// let salary = [1000,2000,3000];
// let ans = salary.reduce(function(acc ,val){
//     return acc+val;
// },0);

// console.log(ans);


// Question 6

// let names = ["avi","deepesh","harsh","polll","hello"];

// let ans = names.some(function(val){
//     return val === "avi";
// });
// console.log(ans);


// Question 7

// let user = {
//     name : "Deepesg",
//     email :"h@h.com",
//     age : 20,
// };

// Object.seal(user);
// user.name = "Harshita";
// console.log(user.name);


let obj = {
    user :{
        name : "Deepesh",
        age : 20,
        address : {
            city : "Bhopal",
        }
    }
}
console.log(obj.user.address.city);
