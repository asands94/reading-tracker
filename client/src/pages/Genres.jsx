import axios from 'axios'
import { useState, useEffect } from 'react'

const Genres = () => {
  const [genres, setGenres] = useState([])

  const getGenres = async () => {
    const res = await axios.get(`http://localhost:3000/api/genres`)
    setGenres(res.data)
  }

  useEffect(() => {
    getGenres()
  }, [])

  const allGenres = genres.map((genre) => (
    <div key={genre._id}>
      <h3>{genre.name}</h3>
      <p>{genre.description}</p>
    </div>
  ))

  return <>{allGenres}</>
}

export default Genres
