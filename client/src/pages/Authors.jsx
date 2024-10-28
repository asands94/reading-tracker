import axios from 'axios'
import { useState, useEffect } from 'react'
import styles from '../styles/authors.module.css'

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
    <div key={author._id} className={styles.authorDiv}>
      <h3>{author.name}</h3>
      <img
        className={styles.authorImage}
        src={author.image}
        alt={author.name}
      />
    </div>
  ))

  return (
    <>
      <h1>Author List</h1>
      <section className={styles.authorContainer}>{allAuthors}</section>
    </>
  )
}

export default Authors
