class Books {
    constructor(name, author, price, edition) {
        this.b_name = name;
        this.b_author = author;
        this.b_price = price;
        this.b_edition = edition;
    }
    bookinfo(){
        let info=document.querySelector("#bookinfo")
        return info.innerHTML+=
        `<tr><td>${this.b_name}</td><td>${this.b_author}</td><td>${this.b_price}</td><td>${this.b_edition}</td></tr>`
    }
}

let B1 = new Books("Think and grow rich", "NapoleonHill", "$4.99", "3rd edition")
let B2 = new Books("Rich Dad Poor Dad", "Robert Kiyosaki", "$3.99", "1st edition")
let B3 = new Books("Money master The Game", "Tony Robbins", "$5.99", "1rd edition")
let B4 = new Books("Can't Hurt Me", "David Goggins", "$7.99", "1st edition")

B1.bookinfo()
B2.bookinfo()
B3.bookinfo()
B4.bookinfo()

// let table = document.querySelector("#table");
// table.innerHTML = `
        
// `