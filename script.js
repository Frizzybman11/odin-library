const myLibrary = [];
const dialog = document.getElementById("form-dialog");
const showButton = document.getElementById("new-book");
const closeButton = document.getElementById("close-form");
const confirmButton = document.getElementById("confirm-form")
let book = {};

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        info = [title, author, pages, read]
        return info
    }
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

function displayBooks(myLibrary){
    for (i = 0; i < myLibrary.length; i++){
        
    }
}

showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});

confirmButton.addEventListener("click", () => {
    let title = document.getElementById("title").value
    let author = document.getElementById("author").value
    let pages = document.getElementById("pages").value
    let read = document.querySelector('input[name="read"]:checked').value
    let book_num = myLibrary.length + 1
    book_num = book_num.toString()
    book[book_num] = new Book(title, author, pages, read)
    addBookToLibrary(book[book_num])
})
