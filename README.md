# LibraryApp

Implementing Express framework for developing CRUD operations.

# api endpoints

// GET request for all books
url: http://localhost:8080/books

// GET request for a book
url: http://localhost:8080/book/:bookId

// POST request for a book
url: http://localhost:8080/book
body: { "title": "title of the book", "author": "author of the book", "summary": "summary of the book" }

// PUT request for a book
url: http://localhost:8080/book/:bookId
body: { "title": "title of the book", "author": "author of the book", "summary": "summary of the book" }

// DELETE request for a book
url: http://localhost:8080/book/:bookId
