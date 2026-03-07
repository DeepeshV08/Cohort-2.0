// let url = `https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={18c61d21cea86cb8d39ee3d399cf5a9c}`
// let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;


// async function getWeather(city){
//     try{
//         let apikey = `18c61d21cea86cb8d39ee3d399cf5a9c`;
//     let raw = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
//     )
//     if(!raw.ok){
//         throw new Error("City not found or something went wrong")
//     }
//         let realdata = await raw.json();
//        if(realdata.main.temp < 0){
//         console.log("Too cold out there" , `${realdata.main.temp}`);
//        }else if(realdata.main.temp > 40){
//         console.log("Too hot out there" , realdata.main.temp);
//        }else{
//         console.log("Normal Temp" , realdata);
//        }
    
//     }catch(err){
//         console.log(err.message);
//     }
// }
// getWeather("Bhopal");



const userList = [
    "deepesh@email.com",
    "harsh@sher.com",
    "chmagadad@email.com"
]

function sendEmail(email){
    return new Promise((resolve , reject)=>{
        let time = Math.floor(Math.random()*5);
        setTimeout(() => {
            let probability = Math.floor(Math.random()*10);
            if(probability <= 5) resolve("Email Successfully sent...");
            else reject("Email Failed....");
        }, time*1000);
    });
}
// sendEmail(data)
//     .then(function (data){
//         console.log(data);
//     })
//     .catch(function (err){
//         console.log(err);
        
//     });

async function sendEmails(userList){
    let allResponse = userList.map(function(email){
       return sendEmail(email)
        .then(function(data){
            return data;
        })
        .catch(function(err){
            return err;  
        });
    });

    let ans = await Promise.all(allResponse);
    ans.forEach(function(status , index){
        console.log(status);
    })
}
sendEmails(userList);