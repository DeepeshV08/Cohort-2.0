
// Creatign element with the help of JS
// var h1 = document.createElement('h1');
// h1.innerHTML = 'Hello guys';
// h1.style.colo = 'red';

// var btn = document.querySelector('button');

// btn.addEventListener('click',function(){
//    var h1 = document.createElement('h1');
//    h1.innerHTML = "hello form Js";
//    console.log(h1);
// })


// Appending Child
// var btn = document.createElement("button");

// btn.innerHTML="download";
// btn.style.backgroundColor = "lightseagreen"

// var main = document.querySelector('main');
// main.appendChild(btn);



var btn = document.querySelector("button")
var main = document.querySelector('main');

btn.addEventListener('click',function(){
    let div = document.createElement('div');

    var x = Math.floor(Math.random()*100+1);
    var y = Math.floor(Math.random()*100+1);
    var c1 = Math.floor(Math.random()*256);
    var c2 = Math.floor(Math.random()*256);
    var c3 = Math.floor(Math.random()*256);
    var r = Math.floor(Math.random()*360);
    div.style.width = '80px';
    div.style.height = '80px';
    div.style.position = 'absolute';
    div.style.left = x+'%';
    div.style.top = y+'%';
    div.style.rotate = r+'deg';
    div.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
    main.appendChild(div);
})