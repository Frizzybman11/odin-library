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
        if (pages == ""){
            pages = 0;
        }
        let book = new Book(title, author, pages, read)
        myLibrary.push(book);
    }
}

function displayBooks(myLibrary){
    for (i = 0; i < myLibrary.length; i++){
        let newBook = document.createElement("div")
        newBook.className = "book-card"
        newBook.id = "book" + i
        let bookInfo = document.createElement("div")
        let bookTitle = document.createElement("span")
        let bookAuthor = document.createElement("span")
        let bookPages = document.createElement("span")
        let bookStatus = document.createElement("div")
        let bookRead = document.createElement("input")
        let bookRemove = document.createElement("input")
        bookInfo.className = "book-info"
        bookTitle.className = "book-title"
        bookTitle.innerText = myLibrary[i].title
        bookInfo.appendChild(bookTitle)
        bookAuthor.className = "book-author"
        bookAuthor.innerText = myLibrary[i].author
        bookInfo.appendChild(bookAuthor)
        bookPages.className = "book-pages"
        bookPages.innerText = myLibrary[i].pages + " pages"
        bookInfo.appendChild(bookPages)
        newBook.appendChild(bookInfo)
        bookStatus.className = "book-status"
        bookRead.className = "book-read"
        bookRead.type = "image"
        bookRead.setAttribute("onclick", "readStatus(this)")
        if (myLibrary[i].read == "Read"){
            bookRead.src="images/checkbox-outline.svg"
            bookRead.classList.add("read-yes")
        } else {
            bookRead.src="images/close-box-outline.svg"
            bookRead.classList.add("read-no")
        }
        bookStatus.appendChild(bookRead)
        bookRemove.className = "book-remove"
        bookRemove.type = "image"
        bookRemove.setAttribute("onclick", "deleteBook(this)")
        bookRemove.src="images/delete.svg"
        bookStatus.appendChild(bookRemove)
        newBook.appendChild(bookStatus)
        cardDiv.appendChild(newBook)
    }
}

function deleteBook(book){
    let booknum = book.parentNode.parentNode.id
    booknum = booknum.slice(-1)
    myLibrary.splice(booknum, 1)
    book.parentNode.parentNode.remove()
    cardDiv.innerHTML = ""
    displayBooks(myLibrary)
}

function readStatus(book){
    let booknum = book.parentNode.parentNode.id
    booknum = booknum.slice(-1)
    let currentStatus = myLibrary[booknum].read
    if (currentStatus == "Read"){
        myLibrary[booknum].read = "Not Read"
        book.src="images/close-box-outline.svg"
        book.classList.remove("read-yes")
        book.classList.add("read-no")
    } else {
        myLibrary[booknum].read = "Read"
        book.src="images/checkbox-outline.svg"
        book.classList.remove("read-no")
        book.classList.add("read-yes")
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
