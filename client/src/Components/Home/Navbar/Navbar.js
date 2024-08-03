import './navbar.css';
import { FaHome, FaList, FaTags, FaComments, FaBlog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <nav className="bottom-navbar">
        <Link to="/home#home"> <FaHome /> </Link>
        <Link to="/home#featured"> <FaList /> </Link>
        <Link to="/home#arrivals"> <FaTags /> </Link>
        <Link to="/home#reviews"> <FaComments /> </Link>
        <Link to="/home#blogs"> <FaBlog /> </Link>
      </nav>
    </>
  );
}

export default App;
