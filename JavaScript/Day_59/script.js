

// function abcd(fn){
//     fn(function(fn3){
//         fn3(function(fn5){
//             fn5();
//         });
//     });
// }

// abcd(function(fn2){
//     fn2(function(fn4){
//         fn4(function(){
//             console.log("fn4  Heyyy");
//         });
//     });
// })


// Callbacks


// amitSeDetailLaao(address , cb)
// dukannKoDhundho(details,cb)
// samaanLelo(samaanList , cb)
// ghrAajao(address,cb)

// function amistSeDetailLaao(address,cb){
//     console.log("fetching details.....");
//     setTimeout(() => {
//         return cb({lat : 36363,lng : 516545});
//     }, 2000);
// }
// amistSeDetailLaao("bhopal",function(details){
//     console.log(details);
// })



function greet(name , cb){
    console.log("Hello " + name);
    cb();
}

greet("Deepesh",()=>{
    console.log("welcome!");
})