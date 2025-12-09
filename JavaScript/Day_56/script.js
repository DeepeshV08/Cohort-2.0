class Book{
    constructor(name , price , authorName,color){
        this.name = name;
        this.price = price;
        this.authorName = authorName;
        this.color = color;
    }
    pannaPalto(){}
    bookMark(){}
    padhlo(){}
}

let book1 = new Book("tatiyaBicchu",200,"harsh","red")
console.log(book1);

class User{
    constructor(){
        this.userName = "Deepesh";
        this.age = 20;
        this.city = "Bhopal";
    }
}