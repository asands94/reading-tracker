const Book = require('../models/book')

const createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body)
    res.status(201).json(book)
  } catch (e) {
    console.error(e.message)
  }
}

const getBooks = async (req, res) => {
  try {
    const books = await Book.find()
    res.status(200).json(books)
  } catch (e) {
    console.error(e.message)
  }
}

const getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id)
    res.status(200).json(book)
  } catch (e) {
    console.error(e.message)
  }
}

const updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    res.status(200).json(book)
  } catch (e) {
    console.error(e.message)
  }
}

const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id)
    res.status(200).json(`Book: ${book.name} deleted`)
  } catch (e) {
    console.error(e.message)
  }
}

module.exports = {
  createBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook,
}
