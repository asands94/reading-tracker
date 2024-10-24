const { Router } = require('express')
const {
  createGenre,
  getGenres,
  getGenre,
  updateGenre,
  deleteGenre,
} = require('../controllers/genre')

const router = Router()

router.post('/', createGenre)
router.get('/', getGenres)
router.get('/:id', getGenre)
router.put('/:id', updateGenre)
router.delete('/:id', deleteGenre)

module.exports = router
