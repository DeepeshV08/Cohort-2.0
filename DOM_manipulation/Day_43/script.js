

// var h1 = document.querySelector('h1');



// h1.addEventListener('click',function(){
//     h1.innerHTML = "Lets funcking go"; 
//     h1.style.color = 'red';
//     h1.style.backgroundColor = 'black';
// })

// var h1 = document.querySelector('h1');

// h1.addEventListener('click',()=>{
//     h1.innerHTML = "Lets Fucccking GOOOOOO..";
//     h1.style.color = 'red';
//     h1.style.backgroundColor = 'black';
// });


// Math class - Math.random is a method used to generate random number
// let rdm = Math.floor(Math.random()*10+1);
// console.log(rdm);

// var a = Math.floor(Math.random()*100+1);
// console.log(a);




// let btn = document.querySelector('button');
// let box = document.querySelector('#box');

// btn.addEventListener('click',function(){
//     var c1 = Math.floor(Math.random()*256);
//     var c2 = Math.floor(Math.random()*256);
//     var c3 = Math.floor(Math.random()*256);

//     box.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
// });


// let arr = ['vedant','deepesh','deepu','anchal','souvik','sumit','satwik','sarthak','ankit'];

// let a = Math.floor(Math.random()*arr.length);
// console.log(arr[a]);


let arr = [
    {
        team :'CSK',
        primary:'yellow',
        secondary : 'blue',
    },
    {
        team :'MI',
        primary:'blue',
        secondary : 'gold',
    },
    {
        team :'RCB',
        primary:'red',
        secondary : 'green',
    },
    {
        team :'KKR',
        primary:'purple',
        secondary : 'gold',
    },
]

// let a = Math.floor(Math.random()*arr.length);
// console.log(arr[a]);

let btn = document.querySelector('button');
let h1 = document.querySelector('h1');
var body = document.querySelector('body');
btn.addEventListener('click',function(){
    let a = Math.floor(Math.random()*arr.length);
    h1.innerHTML = arr[a].team;
    h1.style.backgroundColor = arr[a].secondary;
    body.style.backgroundColor = arr[a].primary;
})