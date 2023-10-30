const express = require("express");
const { body } = require("express-validator");

const library = require("../controllers/library");

const router = express.Router();

// GET /feed/books
router.get("/books", library.getBooks);

// POST /feed/book
router.post(
  "/book",
  [
    body("title").trim().isLength({ min: 5 }),
    body("author").trim().isLength({ min: 5 }),
    body("summary").trim().isLength({ min: 5 }),
  ],
  library.createBook
);

router.get("/book/:bookId", library.getBook);

router.put(
  "/book/:bookId",
  [
    body("title").trim().isLength({ min: 5 }),
    body("author").trim().isLength({ min: 5 }),
    body("summary").trim().isLength({ min: 5 }),
  ],
  library.updateBook
);

router.delete("/book/:bookId", library.deleteBook);

module.exports = router;
