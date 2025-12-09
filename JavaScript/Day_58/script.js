// let user1 = {
//     name : "Deepesh",
//     email : 'depepepes',
//     login :function(){
//         console.log("Logged in");
        
//     }
// }
// let user2 = {
//     name : "Deepesh",
//     email : 'depepepes',
//     login :function(){
//         console.log("Logged in");
        
//     }
// }
// let user3 = {
//     name : "Deepesh",
//     email : 'depepepes',
//     login :function(){
//         console.log("Logged in");
        
//     }
// }
// let user4 = {
//     name : "Deepesh",
//     email : 'depepepes',
//     login :function(){
//         console.log("Logged in");
        
//     }
// }
// let user5 = {
//     name : "Deepesh",
//     email : 'depepepes',
//     login :function(){
//         console.log("Logged in");
        
//     }
// }
// user.login();


// class User{
//     constructor(name , email){
//         this.name = name;
//         this.email = email;
//     }
//     loggedIn(){
//         console.log("Logged Inn");
//     }
// }
// let user1 = new User("Deepesh","d@mail.com")


// let product = {
//     name : "cap",
//     price : 3000,
//     discountPrice:function(){
//       return this.price - 200;
//     },
// }
// console.log(product.discountPrice());


// class Car {
//     constructor(brand , speed){
//         this.speed = speed;
//         this.brand = brand;
//     }

//     drive(){
//         return this.brand +"-"+this.speed;
//     }

// }

// let car1 = new Car("tata",200)
// console.log(car1.drive());

// let car2 = new  Car("maruti" , 170);
// console.log(car2.drive());



// class Students {
//     constructor(name , rollNo){
//         this.name = name;
//         this.rollNo = rollNo;
//     }
//     intrduce(){
//         return this.name +" - "+this.rollNo
//     }
// }
// let stu1 = new Students("deep",20);
// console.log(stu1.intrduce());


// let obj = {
//     sayName : function(){
//         console.log(this);
        
//     },
//     sayArrowName : ()=>{
//         console.log(this);
        
//     },
// }
// obj.sayName();
// obj.sayArrowName();


function User(){
    this.name = "Deepesh";
    
}
let user1 = new User();
console.log(user1);
