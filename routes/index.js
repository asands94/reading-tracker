const { Router } = require('express')
const bookRoutes = require('./book')
const authorRoutes = require('./author')
const genreRoutes = require('./genre')

const router = Router()

router.get('/', (req, res) => res.send('API root'))
router.use('/books', bookRoutes)
router.use('/authors', authorRoutes)
router.use('/genres', genreRoutes)

module.exports = router
