const Author = require('../models/author')

const createAuthor = async (req, res) => {
  try {
    const author = await Author.create(req.body)
    res.status(201).json(author)
  } catch (e) {
    console.error(e.message)
  }
}

const getAuthors = async (req, res) => {
  try {
    const authors = await Author.find()
    res.status(200).json(authors)
  } catch (e) {
    console.error(e.message)
  }
}

const getAuthor = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id)
    res.status(200).json(author)
  } catch (e) {
    console.error(e.message)
  }
}

const updateAuthor = async (req, res) => {
  try {
    const author = await Author.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    res.status(200).json(author)
  } catch (e) {
    console.error(e.message)
  }
}

const deleteAuthor = async (req, res) => {
  try {
    const author = await Author.findByIdAndDelete(req.params.id)
    res.status(200).json(`Author: ${author.name} deleted`)
  } catch (e) {
    console.error(e.message)
  }
}

module.exports = {
  createAuthor,
  getAuthors,
  getAuthor,
  updateAuthor,
  deleteAuthor,
}
