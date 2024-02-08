import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Home/Header/Header';
import './book.css';

function Book() {
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [listNotification, setNotification] = useState(false);
  const [addingToWishlist, setAddingToWishlist] = useState(false);
  const email = sessionStorage.getItem('UserEmail')

  const addToWishlist = async (bookDetails) => {
    try {
      setAddingToWishlist(true);
      const response = await fetch(`${process.env.REACT_APP_API_URL}/wishlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          wishlist: bookDetails
        }),
      });
      if (response.ok) {
        setAddingToWishlist(false);
        setNotification(true);
      } else {
        console.error('Error:', response.statusText);
        setNotification(false);
      }
    } catch (error) {
      console.error('Error:', error);
      setNotification(false);
    }
  };

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/book/${id}`);
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
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
                    <div className="wishlist_button">
                      <button className="a_btn" onClick={() => { addToWishlist(bookDetails) }}>Add to Wishlist</button>
                      {addingToWishlist && <p className='list_notification'>Adding to Wishlist...</p>}
                      {listNotification && <p className='list_notification'>Item added to the list</p>}
                    </div>
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
