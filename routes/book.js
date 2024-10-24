const { Router } = require('express')
const {
  createBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook,
} = require('../controllers/book')

const router = Router()

router.post('/', createBook)
router.get('/', getBooks)
router.get('/:id', getBook)
router.put('/:id', updateBook)
router.delete('/:id', deleteBook)

module.exports = router
