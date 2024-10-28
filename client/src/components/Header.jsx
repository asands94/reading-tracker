import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/'>Books</Link>
          </li>
          <li>
            <Link to='/authors'>Authors</Link>
          </li>
          <li>
            <Link to='/genres'>Genres</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
