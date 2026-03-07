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


