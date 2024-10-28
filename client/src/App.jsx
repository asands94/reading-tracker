import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Genres from './pages/Genres'
import Authors from './pages/Authors'

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/genres' element={<Genres />} />
          <Route path='/authors' element={<Authors />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
