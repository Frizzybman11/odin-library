const myLibrary = [];
const dialog = document.getElementById("form-dialog");
const showButton = document.getElementById("new-book");
const closeButton = document.getElementById("add-book");

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        info = title + " by " + author + ", " + pages + ", " + read
        return info
    }
}

function addBookToLibrary(){
    //
}

showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});