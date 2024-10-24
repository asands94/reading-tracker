const { Router } = require('express')
const {
  createAuthor,
  getAuthors,
  getAuthor,
  updateAuthor,
  deleteAuthor,
} = require('../controllers/author')

const router = Router()

router.post('/', createAuthor)
router.get('/', getAuthors)
router.get('/:id', getAuthor)
router.put('/:id', updateAuthor)
router.delete('/:id', deleteAuthor)

module.exports = router
