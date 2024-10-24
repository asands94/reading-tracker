const { Router } = require('express')
const { createBook } = require('../controllers/book')

const router = Router()

router.post('/', createBook)

module.exports = router
