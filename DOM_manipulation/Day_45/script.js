let user = 'deepesh'

let btn = document.querySelector('button')
let h1 = document.querySelector('h1')

btn.addEventListener('click',()=>{

    h1.innerHTML = "Changging User"
    setTimeout(()=>{
        h1.innerHTML = "Deepesh Verma"
    },2000)
})



var b = 0;


