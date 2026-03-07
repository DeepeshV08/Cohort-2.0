class Book{
    constructor(name , author , price , color){
        this.name = name;
        this.author = author;
        this.price = price;
        this.color = color;
    }
    bookMark(){
        console.log("Book Mark lag gya");
    }
    pannaPalto(){};
}

let book1 = new Book("evil","deepesh",1200,"grey");
console.log(book1);

