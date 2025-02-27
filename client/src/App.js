import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Book from './Components/Book/Book'
import Wishlist from './Components/Wishlist/Wishlist'
import Error from './Components/Error/Error'
import Cart from './Components/Cart/Cart'
import { TokenRoute } from './Components/TokenRoute/TokenRoute'
import RedirectToLogin from './Components/Redirect/Redirect'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route element={<TokenRoute />}>
          <Route path='/home' element={<Home />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/book/:id' element={<Book />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
        <Route path='/redirect' element={<RedirectToLogin />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}

export default App
