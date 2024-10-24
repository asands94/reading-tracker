const { mongoose, Schema } = require('mongoose')

const authorSchema = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: false },
    book_id: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
  },
  { timestamps: true }
)

module.exports = mongoose.model('Author', authorSchema)
