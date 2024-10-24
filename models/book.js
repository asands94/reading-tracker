const { mongoose, Schema } = require('mongoose')

const commentSchema = new Schema(
  {
    content: { type: String, required: false },
  },
  { timestamps: true }
)

const bookSchema = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: false },
    author: [{ type: Schema.Types.ObjectId, ref: 'Author' }],
    rating: { type: Number, required: false },
    description: { type: String, required: false },
    comments: [commentSchema],
    genre: [{ type: Schema.Types.ObjectId, ref: 'Genre' }],
  },
  { timestamps: true }
)

module.exports = mongoose.model('Book', bookSchema)
