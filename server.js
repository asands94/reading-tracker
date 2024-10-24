// DEPENDENCIES
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv/config')

const app = express()
const PORT = process.env.PORT || 3001

// FILE IMPORTS
require('./db')
const routes = require('./routes')

// MIDDLEWARE
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

// ROUTES
app.get('/', (req, res) => {
  res.send('API Docs')
})

app.use('/api', routes)

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})
