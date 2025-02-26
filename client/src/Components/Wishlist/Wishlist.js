import React, { useEffect, useState } from 'react';
import Header from '../Home/Header/Header';
import Navbar from '../Home/Navbar/Navbar'
import { FaTrash } from "react-icons/fa";
import './wishlist.css';

function Wishlist() {
    const [wishlist, setWishlist] = useState([]);
    const token = sessionStorage.getItem('userId')

    function add3Dots(string, limit) {
        const words = string.split(' ');
        if (words.length > limit) {
            return words.slice(0, limit).join(' ') + '...';
        }
        return string;
    }

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

function handleDelete(_id) {
        fetch(`${process.env.REACT_APP_API_URL}wishlist/delete/${_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`,
            },
        })
            .then((data) => data.json())
            .then((res) => {
                console.log("res", res)
                if (res) {
                    fetchWishlist();
                }
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {
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
                                        <button onClick={()=>handleDelete(data._id)} className='w_delete'><FaTrash /></button>
                                        <img src={data.image} alt="Book Cover" className='w_book_img' />
                                        <div className='w_book_info'>
                                            <h2 className='w_book_name'>{data.name}</h2>
                                            <p className='w_author'>Author: {data.author}</p>
                                            <p className='w_description'>Description:{add3Dots(data.description,140)}</p>
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
