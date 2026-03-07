

// fetch(``)
//     .then((raw)=> raw.json())
//     .then((data)=>{
//         console.log(data);
//     })
//     .catch((err)=>{
//         console.log(err)
//     })



async function abcd(){
    let raw = await fetch("");
    let data = raw.json();
    console.log(data);
}