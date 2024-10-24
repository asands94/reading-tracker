const genreContainer = document.querySelector('.genre-container')

const getGenres = async () => {
  try {
    const res = await axios.get(`http://localhost:3000/api/genres`)
    console.log(res)
    const genres = res.data

    genres.forEach((genre) => {
      const genreDiv = document.createElement('div')
      const genreName = document.createElement('h3')
      const genreDes = document.createElement('p')

      genreName.innerHTML = genre.name
      genreDes.innerHTML = genre.description

      genreContainer.appendChild(genreDiv)
      genreDiv.appendChild(genreName)
      genreDiv.appendChild(genreDes)
    })
  } catch (e) {
    console.error(e.message)
  }
}

getGenres()
