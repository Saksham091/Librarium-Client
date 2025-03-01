import './main.css'
import stand from '../../../assets/stand.png'
import { FaShippingFast, FaLock, FaRedoAlt, FaHeadset } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Main() {

  const [book, setBook] = useState([]);
  const token = sessionStorage.getItem('userId')

  const fetchBooks = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}book/display?limit=6`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setBook(data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    fetchBooks();
  }, [])

  return (
    <>
      <section class="home" id="home">

        <div class="row">

          <div class="content">
            <h3>Welcome To Librarium</h3>
            <p>Find your next favorite book at a great price! We've got amazing discounts don't miss these limited-time offers—grab all your favorite books!</p>
            <a href="#" class="btn">Shop Now</a>
          </div>



          <div class="books-slider">
            <div class="wrapper">
              {
                book.map((book) => {
                  return (
                    <Link to={`/book/${book._id}`}>
                      <img src={book.image} alt="book" class="m_book_img" />
                    </Link>
                  )
                })
              }
            </div>
            <img src={stand} class="stand" alt="stand" />
          </div>

        </div>

      </section>

      <section class="icons-container">

        <div class="icons">
          <i> <FaShippingFast /> </i>
          <div class="content">
            <h3>Free Shipping</h3>
            <p>All Over The World</p>
          </div>
        </div>

        <div class="icons">
          <i> <FaLock /> </i>
          <div class="content">
            <h3>Secure Payment</h3>
            <p>100 Secure Payment</p>
          </div>
        </div>

        <div class="icons">
          <i> <FaRedoAlt /> </i>
          <div class="content">
            <h3>Easy Returns</h3>
            <p>10 Days Returns</p>
          </div>
        </div>

        <div class="icons">
          <i> <FaHeadset /> </i>
          <div class="content">
            <h3>24/7 Support</h3>
            <p>Call Us Anytime</p>
          </div>
        </div>

      </section>
    </>
  )

}

export default Main;