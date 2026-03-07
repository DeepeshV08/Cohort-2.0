

// cb - ek function hai 
// jab kaam ho jaaye tab chalta hai

// function instagramSeDataLaao(username , cb){
//    console.log("fetching details..");
//    setTimeout(() => {
//      cb({id:1,username:"deepesh",age : 20});
//    }, 2000);
   
// }

// instagramSeDataLaao("deepesh",function(data){
//     console.log(data);
// });


// function afterDelay(time , cb){
//     setTimeout(() => {
//     cb();
// }, time);
// }

// afterDelay(3000,function(){
//     console.log("callback executed");
    
// })

// function getUser(username , cb){
//     console.log("getting user details....")
//     setTimeout(() => {
//         cb({id : 1 , username : "Deepesh"})
//     }, 1000);
// }

// function getUserPost(id , cb){
//     setTimeout(() => {
//         cb(["hello","good day","fack off"]);
//     }, 2000);
// }
// getUser("deepesh",function(data){
//     getUserPost(data.id , function(allpost){
//         console.log(data.username , allpost);
//     });
// });


// function loginUser(username , cb){
//     console.log("user login");
    
//     setTimeout(() => {
//         cb({id:121,username:"deepesh"})
//     }, 1000);
// }
// function fetchPermission(id,cb){
//     console.log("fetching permission");
    
//     setTimeout(() => {
//         cb(["read","write","delete"]);
//     }, 2000);
// }
// function loadDashboard(permission , cb){
//     console.log("permission loaded");
    
//     setTimeout(()=>{
//         cb();
//     },3000)
// }

// loginUser("deepesh" , function(userdata){
//     fetchPermission(userdata.id , function(permission){
//         loadDashboard(permission , function(){
//             console.log("Dashboard loaded");
//         })
//     })
// })


function getUser(userName , cb){

    setTimeout(() => {
        cb({id:1 , userName : "Deepesh"});
    }, 1000);
}

function getUserPost(userId , cb){
    setTimeout(() => {
        cb(["hello","good day","ram ram"])
    }, 2000);
}



getUser("Deepesh",function(data){
    getUserPost(data.id , function(allpost){
        console.log(data.userName ,allpost);
    }) 
})