import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Loader from './Components/Loader/Loader'
import Login from './Components/Login/Login'
import Test from './Components/Test/Test'
import Book from './Components/Book/Book'
import Wishlist from './Components/Wishlist/Wishlist'

function App() {

  return (
    <>
      <Routes>
        <Route path='/loader' element={<Loader />} />
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/test' element={<Test />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path="/book/:id" element={<Book />} />
      </Routes>
    </>
  )
}

export default App