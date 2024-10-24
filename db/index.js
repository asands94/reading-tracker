const mongoose = require('mongoose')
require('dotenv/config')

const db = mongoose.connection

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log(`Connected to database: ${db.name}`)
  })
  .catch((e) => {
    console.error('Connection Error', e.message)
  })

module.exports = db
