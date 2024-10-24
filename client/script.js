const bookContainer = document.querySelector('.book-container')

const getBooks = async () => {
  try {
    const res = await axios.get(`http://localhost:3000/api/books`)
    const books = res.data

    books.forEach((book) => {
      const bookDiv = document.createElement('div')
      const bookImg = document.createElement('img')
      const bookName = document.createElement('h3')

      bookImg.setAttribute('src', book.image)
      bookImg.setAttribute('class', 'book-image')
      bookName.innerHTML = book.name

      bookContainer.appendChild(bookDiv)
      bookDiv.appendChild(bookImg)
      bookDiv.appendChild(bookName)
    })
  } catch (e) {
    console.error(e.message)
  }
}

getBooks()
