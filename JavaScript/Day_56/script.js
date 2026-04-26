// Objects
// We make object to store - ek bande ki detail ek sath rakhne ke liye hmare pass hai "Objects"

let obj = {
    name : "Deepesh",
    age:20,
    email:"deepesh@gmail.com",
    address:"bhopal"
}

console.log(obj)

class Remote{
    constructor(product , price , color){
        this.product = product,
        this.price = price,
        this.color = color
    }
    powerOn(){
        console.log("The machine is on now..");
    }
    powerOff(){
        console.log("The machine is off now..");
    }
}

let remote = new Remote("Lenovo",1300,"grey")
console.log(remote)

class BiscuitMaker{
    constructor(name , price){
        this.name = name,
        this.price = price
    }
}

let biscuit1 = new BiscuitMaker("ParleG",10)
console.log(biscuit1)

class AlooChaat{
    constructor(price , oil ,oilBrand , masaale){
        this.price = price,
        this.oil = oil,
        this.oilBrand = oilBrand,
        this.masaale = masaale
    }
    pack(){
        console.log("aloo chat packed")
    }
    eat(){
        console.log("Ab aap chat kha sakte ho")
    }
}

let chat = new AlooChaat(50,"5ml","saffola",["dhaniya","pudina","mirch"])

console.log(chat)

class Book{
    constructor(name , price , author){
        this.name = name,
        this.price = price,
        this.author = author
    }
    bookMark(){
        console.log("BookMark lag gya");
    }
}
Book.prototype.pagePalto = function(){
    console.log("Page palat do...")
}
let book1 = new Book("science",1200,"RD sharma")

console.log(book1)