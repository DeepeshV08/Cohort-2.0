// Project 1
// let btn = document.querySelector('button');
// let h2 = document.querySelector('h2');
// let inner = document.querySelector('.inner');
// let grow = 0;
// let num = 50 + (Math.random()*50);
// btn.addEventListener('click',function(){
//     btn.style.pointerEvents = 'none';
//     let int = setInterval(() => {
//         grow++;
//         h2.innerHTML = grow +'%';
//         inner.style.width = grow +'%';
//     }, num);

//     setTimeout(() => {
//         clearInterval(int)
//         btn.innerHTML = "Downloaded";
//         btn.style.opacity = '0.5';
//     }, num*100);
// })


// Project 2

let card = document.querySelector('.card')
let img = document.querySelector('img')
let love = document.querySelector('#love')

img.addEventListener('dblclick',()=>{

    love.style.opacity = '1'
    love.style.transform = 'translate(-50%,-50%) scale(1) rotate(0deg)';

    setTimeout(() => {
        love.style.transform = 'translate(-50%,-300%) scale(1) rotate(60deg)';
    }, 800);
    setTimeout(() => {
        love.style.opacity = '0'
        
    }, 900);
    setTimeout(() => {
        love.style.transform = 'translate(-50%,-50%) scale(1) rotate(-60deg)';
    }, 1200);
})
