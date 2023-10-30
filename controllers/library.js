const Book = require("../models/book");

exports.getBooks = (req, res, next) => {
  Book.find()
    .then((books) => {
      res.status(200).json({
        books: books,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.createBook = (req, res, next) => {
  const title = req.body.title;
  const author = req.body.author;
  const summary = req.body.summary;

  const book = new Book({
    title: title,
    author: author,
    summary: summary,
  });

  book
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Book added successfully!",
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.getBook = (req, res, next) => {
  const bookId = req.params.bookId;

  Book.findById(bookId)
    .then((book) => {
      if (!book) {
        const error = new Error("Could not find book.");
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json({ message: "Book fetched.", book: book });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.updateBook = (req, res, next) => {
  const bookId = req.params.bookId;

  const title = req.body.title;
  const author = req.body.author;
  const summary = req.body.summary;

  Book.findById(bookId)
    .then((book) => {
      if (!book) {
        const error = new Error("Could not find book.");
        error.statusCode = 404;
        throw error;
      }
      book.title = title;
      book.author = author;
      book.summary = summary;
      return book.save();
    })
    .then((result) => {
      res.status(200).json({ message: "Book updated!", book: result });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.deleteBook = (req, res, next) => {
  const bookId = req.params.bookId;

  Book.findById(bookId)
    .then((book) => {
      if (!book) {
        const error = new Error("Could not find book.");
        error.statusCode = 404;
        throw error;
      }
      return Book.findByIdAndRemove(bookId);
    })
    .then((result) => {
      res.status(200).json({ message: "Deleted post." });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
