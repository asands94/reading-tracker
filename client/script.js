// CACHED ELEMENTS
const bookContainer = document.querySelector('.book-container')
const bookName = document.querySelector('.book-name')
const bookAuthor = document.querySelector('.book-author')
const bookImage = document.querySelector('.book-image')
const commentForm = document.querySelector('.comment-form')
const commentText = document.querySelector('#content')
const commentButton = document.querySelector('.comment-button')

// GLOBAL VARIABLES
let bookId

// FUNCTIONS
const getBooks = async () => {
  try {
    const res = await axios.get(`http://localhost:3000/api/books`)
    const books = res.data
    books.forEach((book) => {
      bookId = book._id
      const bookDiv = document.createElement('div')
      const bookImg = document.createElement('img')
      const bookName = document.createElement('h3')

      bookImg.setAttribute('src', book.image)
      bookImg.setAttribute('class', 'book-image')
      bookName.innerHTML = book.name

      bookContainer.appendChild(bookDiv)
      bookDiv.appendChild(bookName)

      book.author.forEach((auth) => {
        const bookAuthor = document.createElement('h3')
        bookAuthor.innerHTML = `By: ${auth.name}`
        bookDiv.appendChild(bookAuthor)
      })

      bookDiv.appendChild(bookImg)

      bookDiv.addEventListener('click', getBook)
    })
  } catch (e) {
    console.error(e.message)
  }
}

getBooks()

const getBook = async () => {
  bookContainer.style.display = 'none'

  const res = await axios.get(`http://localhost:3000/api/books/${bookId}`)
  const book = res.data

  bookName.innerHTML = book.name

  book.author.forEach((auth) => {
    bookAuthor.innerHTML = `By: ${auth.name}`
  })

  bookImage.setAttribute('src', book.image)
  commentForm.style.display = 'flex'
}

const addComment = async () => {
  commentButton.addEventListener('click', async (e) => {
    e.preventDefault()

    await axios.post(`http://localhost:3000/api/books/${bookId}/comments`, {
      content: commentText.value,
    })
    commentText.value = ''
  })
}

addComment()
