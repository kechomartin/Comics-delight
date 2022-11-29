// Book Class : represents a Book
class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class:Handle UI tasks 
class UI {
    static diplayBooks() {
        const StoreBooks = [
        {
            title: 'Book One',
            author: 'John Doe',
            isbn:'3434434'
        },
        {
            title: 'Book Two',
            author: 'Jane Doe',
            isbn: '45545'
        }
    ];

    const books = StoreBooks;

    books.forEach((book)=>UI.addBooKTolist(book));
 }
     static addBooKTolist(book) {
     const list = document.querySelector('#book-list');

     const row = document.createElement('tr');

     row.innerHTML = `
     <td>${book.title}</td>
     <td>${book.author}</td>
     <td>${book.isbn}</td>
     <td><a href="#" class="btn btn-danger btn-sm delete">X</td>
     `;
     list.appendChild(row);
    }
}


// Store Class: Handles storage 

// Events : Display Books 
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event : Add a book 
document.querySelector('#book-form').addEventListener('submit', (e) => {
    // prevent actual submit 
    e.preventDefault();
    //Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    // inanstanciate book
    const book = new Book(title, author, isbn);

    console.log(book)
});

// Event : Remove a Book 