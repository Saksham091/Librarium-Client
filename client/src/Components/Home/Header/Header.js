import React, { useState } from 'react';
import { FaBook, FaSearch, FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';
import './header.css';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
    const [input, setInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [isActive, setIsActive] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const fetchData = async (value) => {
        if (!value.trim()) {
            setSearchResults([]);
            return;
        }

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/book/search?q=${value}`);
            const data = await response.json();

            if (data) {
                setSearchResults(data);
            } else {
                setSearchResults([]);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };

    const handleLogout = () => {
        sessionStorage.clear();
        navigate('/');
    };

    return (
        <header className="header">
            <div className="header-1">
                <Link to="/home" className="logo">
                    <span><FaBook /></span> Librarium
                </Link>

                <div className='search'>
                    <form action="" className="search-form">
                        <input
                            type="search"
                            value={input}
                            onChange={(e) => handleChange(e.target.value)}
                            placeholder="Search for books..."
                            id="search-box"
                            onFocus={() => setIsActive(true)}
                            onBlur={() => setIsActive(false)}
                        />
                        <label htmlFor="search-box">
                            <FaSearch />
                        </label>
                    </form>
                    <div className={`search-results ${isActive && input.trim() ? 'active' : ''}`}>
                        {isActive && input.trim() ? (
                            searchResults.length > 0 ? (
                                searchResults.map((book) => (
                                    <div key={book.id} className="book">
                                        <Link to={`/book/${book._id}`} className="search-link">
                                            <div className='search-title'>
                                                <img src={book.image} className="search-img" alt="Image Not Found" />
                                                <div className='search-text'>
                                                    <h3>{book.name}</h3>
                                                    <p>Author: {book.author}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))
                            ) : (
                                <div className="book no-results">
                                    <p>Book information will be updated soon.</p>
                                </div>
                            )
                        ) : null}
                    </div>
                </div>

                <div className="icons">
                    <div id="search-btn">
                        <FaSearch />
                    </div>
                    <Link to="/wishlist">
                        <p>
                            <FaHeart />
                        </p>
                    </Link>
                    <Link to="/cart">
                        <p>
                            <FaShoppingCart />
                        </p>
                    </Link>
                    <div id="login-btn" onClick={() => setDropdownOpen(!dropdownOpen)}>
                        <FaUser />
                        {dropdownOpen && (
                            <div className="dropdown-menu">
                                <button onClick={handleLogout}>Logout</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="header-2">
                <nav className="navbar">
                    <Link to="/home/#home">Home</Link>
                    <Link to="/home/#featured">Featured</Link>
                    <Link to="/home/#arrivals">Arrivals</Link>
                    <Link to="/home/#reviews">Reviews</Link>
                    <Link to="/home/#blogs">Blogs</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
