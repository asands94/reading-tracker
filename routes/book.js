const { Router } = require('express')
const {
  createBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook,
  createComment,
  updateComment,
  deleteComment,
} = require('../controllers/book')

const router = Router()

router.post('/', createBook)
router.post('/:id/comments', createComment)

router.get('/', getBooks)
router.get('/:id', getBook)

router.put('/:id', updateBook)
router.put('/:id/comments/:cId', updateComment)

router.delete('/:id', deleteBook)
router.delete('/:id/comments/:cId', deleteComment)

module.exports = router
