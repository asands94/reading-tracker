import axios from 'axios'
import { useState, useEffect } from 'react'

const Home = () => {
  const [books, setBooks] = useState([])

  const getBooks = async () => {
    const res = await axios.get(`http://localhost:3000/api/books`)
    setBooks(res.data)
  }

  useEffect(() => {
    getBooks()
  }, [])

  const allBooks = books.map((book) => (
    <div key={book._id} className='book-div'>
      <h3>{book.name}</h3>
      {book.author.map((bookAuthor) => (
        <h3 key={bookAuthor._id}>By: {bookAuthor.name}</h3>
      ))}
      <img className='book-image' src={book.image} alt={book.name} />
    </div>
  ))

  return (
    <>
      <h1>Your Books</h1>
      <section className='book-container'>{allBooks}</section>
    </>
  )
}

export default Home
