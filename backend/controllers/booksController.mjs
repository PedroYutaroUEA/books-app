import { bookModel } from "../models/bookModel.mjs";

export const getAllBooks = async (req, res) => {
  try {
    const books = await bookModel.find();
    res.status(200).json(books);
  } catch (error) {
    console.error(`Error while fetching books: ${error.message}`);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
}

export const getBookById = async (req, res) => {
  try {
    const book = await bookModel.findById(req.params.id);

    if (!book)
      return res.status(404).json({ message: "Book not found" });

    res.status(200).json(book);
  } catch (error) {
    console.error(`Error while fetching book: ${error.message}`);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
}

export const createBook = async (req, res) => {
  const { isbn, title, author } = req.body;
  try {
    const bookAlreadyExists = await bookModel.findOne({ isbn });

    if (bookAlreadyExists)
      return res.status(400).json({ message: "Book already exists" });

    const newBook = new bookModel({ isbn, title, author });
    await newBook.save();
    res.status(200).json(books);
  } catch (error) {
    console.error(`Error while creating book: ${error.message}`);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
}

export const updateBook = async (req, res) => {
  try {
    const book = await bookModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!book)
      return res.status(404).json({ message: "Book not found" });

    res.status(200).json(book);
  } catch (error) {
    console.error(`Error while updating book: ${error.message}`);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
}

export const deleteBook = async (req, res) => {
  try {
    const book = await bookModel.findByIdAndDelete(req.parans.id);
    if (!book)
      return res.status(404).json({ message: "Book not found" });

    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    console.error(`Error while deleting book: ${error.message}`);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
}