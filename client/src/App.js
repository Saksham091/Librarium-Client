import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Book from './Components/Book/Book'
import Wishlist from './Components/Wishlist/Wishlist'
import Error from './Components/Error/Error'
import Cart from './Components/Cart/Cart'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import RedirectToLogin from './Components/Redirect/Redirect'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path='/wishlist' element={<PrivateRoute><Wishlist /></PrivateRoute>} />
        <Route path='/book/:id' element={<PrivateRoute><Book /></PrivateRoute>} />
        <Route path='/cart' element={<PrivateRoute><Cart /></PrivateRoute>} />
        <Route path='/redirect' element={<RedirectToLogin />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}

export default App
