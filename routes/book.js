const { Router } = require('express')
const { createBook, getBooks, getBook } = require('../controllers/book')

const router = Router()

router.post('/', createBook)
router.get('/', getBooks)
router.get('/:id', getBook)

module.exports = router
