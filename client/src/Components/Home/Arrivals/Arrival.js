import './arrival.css'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { FiStar } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Arrival() {

  const [book, setBook] = useState([]);
  const token = sessionStorage.getItem('userId')

  const fetchBooks = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}book/display?limit=5`, {
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
      <section class="arrivals" id="arrivals">
        <h1 class="heading"> <span> New Arrivals</span> </h1>
        <div class="arrivals-slider">
          <div class="a_wrapper">
            {
              book.map((book) => {
                return (
                  <Link to={`/book/${book._id}`} class="box">
                    <div class="image">
                      <img src={book.image} alt="book" />
                    </div>
                    <div class="content">
                      <h3>{book.name}</h3>
                      <div class="price"><span> Rs {parseInt(book.price) + parseInt(book.price)}</span> Rs {book.price}</div>
                    </div>
                  </Link>
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  )

}

export default Arrival;