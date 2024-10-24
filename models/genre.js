const { mongoose, Schema } = require('mongoose')

const genreSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: false },
    book_id: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
  },
  { timestamps: true }
)

module.exports = mongoose.model('Genre', genreSchema)
