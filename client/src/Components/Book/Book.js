import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Home/Header/Header';
import './book.css';

function Book() {
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/book/${id}`);
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
    
        // Move this line after response.json() or remove it if not needed
        // const text = await response.text();
        const json = await response.json();
    
        if (json) {
          setBookDetails(json);
        } else {
          console.error('No data found for bookId:', id);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!bookDetails) {
    return <div>No data found for this book.</div>;
  }

  return (
    <>
      <div>
        <Header />
        <div className="container">
          {loading && <div>Loading...</div>}
          {!loading && !bookDetails && <div>No data found for this book.</div>}
          {bookDetails && (
            <div className='book_details'>
              <img src={bookDetails.image} alt="Book Cover" className='book_img' />
              <div className='book_info'>
                <h2 className='book_name'>{bookDetails.name}</h2>
                <p className='author'>Author: {bookDetails.author}</p>
                <p className='description'>Description: <span dangerouslySetInnerHTML={{ __html: bookDetails.description }} /></p>
                <div className="actions">
                  <div className="price"> Price: Rs {bookDetails.price}</div>
                  <div className='cart_button'>
                    <button className="a_btn">Add to Wishlist</button>
                    <button className="a_btn">Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Book;
