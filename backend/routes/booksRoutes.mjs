import express from 'express';
import {
  createBook,
  deleteBook,
  getAllBooks,
  getBookById,
  updateBook
} from '../controllers/booksController.mjs'

const booksRouter = express.Router();

booksRouter.get("/books", getAllBooks);
booksRouter.get("/books/:id", getBookById);
booksRouter.post("/books", createBook);
booksRouter.put("/books/:id", updateBook);
booksRouter.delete("/books/:id", deleteBook);

export { booksRouter };