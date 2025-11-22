
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


// let obj = {
//     user :{
//         name : "Deepesh",
//         age : 20,
//         address : {
//             city : "Bhopal",
//         }
//     }
// }
// console.log(obj.user.address.city);



// Revision

// function abcd(val){
//     console.log(val+2);
// }
// abcd(10);
// abcd(10);
// abcd(10);
// abcd(10);

// let global = 0;
// function impure(a,b){
//     global++;
//     return a+b;
// }
// console.log(impure(1,3));
// console.log(global);


// function abcd({name , age}){
//     console.log(name);
// }
// abcd({name : "Deepesh",age : 20});


// this keyword - this ek aisa keyword hai jiski value badal jati hai baar baar 
// let obj = {
//     name : "Deepesh",
//     fnc:function(){
//        let fnc3 =()=>{
//         console.log(this);
//        }
//        fnc3();
//     },
//     fnc2 : ()=>{
//         // console.log(this);
//     }
// }
// obj.fnc();
// obj.fnc2();
// obj.fnc().fnc3();


// let arr = [1,2,3,4,5];

// let arr2 = arr.map(function(val){
//     return val*val;
// });
// console.log(arr2);


// only even number by using filter

// let arr = [1,2,,4,5,6];

// let newArr = arr.filter(function(val){
//     return val % 2 == 0;
// });

// console.log(newArr);


// Question 

// let salary = [1000,2000,3000];

// let totalSalary = salary.reduce(function(acc,val){
//     return acc+val;
// },0);
// console.log(totalSalary);


// let names = ["deepesh","ajay","harsh","prateek","ashish"];

// let ans = names.some(function(val){
//     return val.length > 3;
// })
// console.log(ans);


// let names = ["deepesh","ajay","harsh","prateek","ashish"];
// let ans = names.every(function(val){
//     return val.length > 3;
// })
// console.log(ans);


