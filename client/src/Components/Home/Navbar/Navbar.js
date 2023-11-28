import './navbar.css'
import {FaHome, FaList, FaTags, FaComments, FaBlog} from 'react-icons/fa'

function App() {

  return (
    <>
      <nav class="bottom-navbar">
        <a href="#home"> <FaHome /> </a>
        <a href="#featured"> <FaList /> </a>
        <a href="#arrivals"> <FaTags /> </a>
        <a href="#reviews"> <FaComments /> </a>
        <a href="#blogs"> <FaBlog /> </a>
      </nav>
    </>
  )

}

export default App;