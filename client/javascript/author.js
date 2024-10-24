const authorContainer = document.querySelector('.author-container')

const getAuthors = async () => {
  try {
    const res = await axios.get(`http://localhost:3000/api/authors`)
    const authors = res.data

    authors.forEach((author) => {
      const authorDiv = document.createElement('div')
      const authorImg = document.createElement('img')
      const authorName = document.createElement('h3')

      authorImg.setAttribute('src', author.image)
      authorImg.setAttribute('class', 'author-image')
      authorName.innerHTML = author.name

      authorContainer.appendChild(authorDiv)
      authorDiv.appendChild(authorImg)
      authorDiv.appendChild(authorName)
    })
  } catch (e) {
    console.error(e.message)
  }
}

getAuthors()
