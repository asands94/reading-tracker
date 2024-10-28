import axios from 'axios'
import { useState, useEffect } from 'react'

const Authors = () => {
  const [authors, setAuthors] = useState([])

  const getAuthors = async () => {
    const res = await axios.get(`http://localhost:3000/api/authors`)
    setAuthors(res.data)
  }

  useEffect(() => {
    getAuthors()
  }, [])

  const allAuthors = authors.map((author) => (
    <div key={author._id}>
      <h3>{author.name}</h3>
      <img className='author-image' src={author.image} alt={author.name} />
    </div>
  ))

  return <>{allAuthors}</>
}

export default Authors
