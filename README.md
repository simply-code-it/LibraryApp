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

# Setup and Run the applications

1. Clone the repository
   git clone <repository url>

2. Install all the dependencies: npm i

3. Start the server: npm start

# Decisions and assumptions

1. Setting up error handler
2. Setting up middleware for the values passed during creating and updating a resource
