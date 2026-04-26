// class Bottle{
//     constructor(){
//         this.color  = "blue";
//         this.material = "plastic";
//         this.price = 120;
//     }
// }

// Bottle.prototype.fill = function(){
//     console.log("Fill ho gyii");
// }
// Bottle.prototype.drink = function(){
//     console.log("Panii piloo");  
// }


// let bt1 = new Bottle();
// console.log(bt1);
// let bt2 = new Bottle();
// console.log(bt2);


class Sketch{
    constructor(){
        this.character = "doraemon";
        this.color = "blue";
        this.someFnc = function(){
            console.log("Kuch nhi hai lallala");   
        }
    }
}
Sketch.prototype.speak = function(){};
Sketch.prototype.walk = function(){};


// global - window
// function - window 
// es5 function inside object - object;
// es6 function inside object - window
// es5 function inside es5 function inside object  - window
// es6 function inside es5 function inside object - object


let obj = {
    name :"Deepesh"
}
function abcd(a,b,c){
    console.log(this,a,b,c)
}

abcd.call(obj)
abcd.apply(obj,[1,2,3])

let newFnc = abcd.bind(obj,1,2,3)


// call -> function chalata hai or this ki value set karta hai
// apply -> wahi karta hai jo call karta hai and arguments mein pehli value this ki and dusri value array hoti hai
// bind -> wahi karta hai jo call karta hai and aapko new function deta hai