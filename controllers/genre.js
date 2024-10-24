const Genre = require('../models/genre')

const createGenre = async (req, res) => {
  try {
    const genre = await Genre.create(req.body)
    res.status(201).json(genre)
  } catch (e) {
    console.error(e.message)
  }
}

const getGenres = async (req, res) => {
  try {
    const genres = await Genre.find()
    res.status(200).json(genres)
  } catch (e) {
    console.error(e.message)
  }
}

const getGenre = async (req, res) => {
  try {
    const genre = await Genre.findById(req.params.id)
    res.status(200).json(genre)
  } catch (e) {
    console.error(e.message)
  }
}

const updateGenre = async (req, res) => {
  try {
    const genre = await Genre.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    res.status(200).json(genre)
  } catch (e) {
    console.error(e.message)
  }
}

const deleteGenre = async (req, res) => {
  try {
    const genre = await Genre.findByIdAndDelete(req.params.id)
    res.status(200).json(`Genre: ${genre.name} deleted`)
  } catch (e) {
    console.error(e.message)
  }
}

module.exports = {
  createGenre,
  getGenres,
  getGenre,
  updateGenre,
  deleteGenre,
}
