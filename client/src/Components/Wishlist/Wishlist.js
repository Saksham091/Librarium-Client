import React, { useEffect, useState } from 'react';
import Header from '../Home/Header/Header';
import Navbar from '../Home/Navbar/Navbar'
import './wishlist.css';

function Wishlist() {
    const [wishlist, setWishlist] = useState([]);
    const token = sessionStorage.getItem('userId')

    useEffect(() => {
        const fetchWishlist = async () => {
            fetch(`${process.env.REACT_APP_API_URL}wishlist/all`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${token}`,
                },
            })
                .then((data) => data.json())
                .then((res) => {
                    console.log("res", res)
                    if (res) {
                        setWishlist(res.wishlist)
                    }
                })
                .catch((error) => console.log(error))
        };
        fetchWishlist();
    }, []);

    return (
        <>
            <div>
                <Header />
                <div className="w_container">
                    {
                        wishlist.length > 0 ? (
                            wishlist.map((data) => {
                                return (
                                    <div className='w_book_details'>
                                        <img src={data.image} alt="Book Cover" className='w_book_img' />
                                        <div className='w_book_info'>
                                            <h2 className='w_book_name'>{data.name}</h2>
                                            <p className='w_author'>Author: {data.author}</p>
                                            <p className='w_description'>Description:{data.description}</p>
                                            <div className="w_actions">
                                                <div className="w_price"> Price: Rs {data.price}</div>
                                            </div>  
                                        </div>
                                    </div>
                                )
                            })
                        ) : (<div className='error_code'>
                            No Books Added In Wishlist
                        </div>)
                    }
                </div>
                <Navbar />
            </div>
        </>
    );
}

export default Wishlist;
