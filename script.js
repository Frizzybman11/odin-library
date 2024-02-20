const myLibrary = [];
const dialog = document.getElementById("form-dialog");
const showButton = document.getElementById("new-book");
const closeButton = document.getElementById("close-form");
const confirmButton = document.getElementById("confirm-form")
const cardDiv = document.getElementById("cards")
const bookForm = document.getElementById("book-form")

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

function addBookToLibrary(){
    let title = document.getElementById("title").value
    let author = document.getElementById("author").value
    let pages = document.getElementById("pages").value
    let read = document.querySelector('input[name="read"]:checked').value
    if (title != "" || author != ""){
        let book = new Book(title, author, pages, read)
        myLibrary.push(book);
    }
}

function displayBooks(myLibrary){
    for (i = 0; i < myLibrary.length; i++){
        let newBook = document.createElement("div")
        newBook.className = "book-card"
        let bookTitle = document.createElement("p")
        let bookAuthor = document.createElement("p")
        let bookPages = document.createElement("p")
        let bookRead = document.createElement("p")
        bookTitle.className = "book-title"
        bookTitle.innerText = myLibrary[i].title
        newBook.appendChild(bookTitle)
        bookAuthor.className = "book-author"
        bookAuthor.innerText = myLibrary[i].author
        newBook.appendChild(bookAuthor)
        bookPages.className = "book-pages"
        bookPages.innerText = myLibrary[i].pages
        newBook.appendChild(bookPages)
        bookRead.className = "book-read"
        bookRead.innerText = myLibrary[i].read
        newBook.appendChild(bookRead)
        cardDiv.appendChild(newBook)
    }
}

showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    bookForm.reset();
    dialog.close();
});

confirmButton.addEventListener("click", () => {
    addBookToLibrary()
    bookForm.reset();
    cardDiv.innerHTML = ""
    displayBooks(myLibrary)
})
