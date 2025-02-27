import React, { useEffect, useState } from 'react';
import axios from "axios";
import Header from '../Home/Header/Header';
import Navbar from '../Home/Navbar/Navbar';
import { FaTrash } from "react-icons/fa";
import './cart.css';

function Cart() {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const token = sessionStorage.getItem('userId')

    function add3Dots(string, limit) {
        const words = string.split(' ');
        if (words.length > limit) {
            return words.slice(0, limit).join(' ') + '...';
        }
        return string;
    }

    function clearCart(){
        fetch(`${process.env.REACT_APP_API_URL}cart/delete`, {
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
                    fetchCart();
                }
            })
            .catch((error) => console.log(error))
    }

    const initPayment = (data) => {
        const options = {
            key: process.env.KEY_ID,
            amount: data.amount,
            currency: data.currency,
            name: "Librarium",
            description: "Test Transaction",
            order_id: data.id,
            handler: async (response) => {
                try {
                    const verifyUrl = `${process.env.REACT_APP_API_URL}payment/verify`;
                    const { data } = await axios.post(verifyUrl, response);
                    console.log(data);
                    if (data.message === "Payment verified successfully") {
                        clearCart();
                    } else {
                        console.log("Payment Failed");
                    }
                } catch (error) {
                    console.log(error);
                }
            },
            theme: {
                color: "#3399cc",
            },
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    };

    const handlePayment = async () => {
        try {
            const orderUrl = `${process.env.REACT_APP_API_URL}payment/orders`;
            const { data } = await axios.post(orderUrl, { amount: totalPrice });
            initPayment(data.data);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchCart = async () => {
        fetch(`${process.env.REACT_APP_API_URL}cart/all`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`, 
            },
        })
            .then((data) => data.json())
            .then((res) => {
                 if (res) {
                    setCart(res.cart)
                    const totalPrice = res.cart.reduce((total, book) => total + Number(book.price), 0)
                    setTotalPrice(totalPrice);
                }
            })
            .catch((error) => console.log(error))
    };
    useEffect(() => {
        fetchCart();
    }, []);

    function handleDelete(_id) {
            fetch(`${process.env.REACT_APP_API_URL}cart/delete/${_id}`, {
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
                        fetchCart();
                    }
                })
                .catch((error) => console.log(error))
        }
        useEffect(() => {
            fetchCart();
        }, []);

    return (
        <>
            <div>
                <Header />
                <div className="c_container">
                    {
                        cart.length > 0 ? (
                            cart.map((data) => {
                                return (
                                    <div className='c_book_details'>
                                        <button onClick={()=>handleDelete(data._id)} className='c_delete'><FaTrash /></button>
                                        <img src={data.image} alt="Book Cover" className='c_book_img' />
                                        <div className='c_book_info'>
                                            <h2 className='c_book_name'>{data.name}</h2>
                                            <p className='c_author'>Author: {data.author}</p>
                                            <p className='w_description'>Description:{add3Dots(data.description,140)}</p>
                                            <div className="c_actions">
                                                <div className="c_price"> Price: Rs {data.price}</div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        ) : (<div className='error_code'>
                            No Books Added In Cart
                        </div>)
                    }
                    <div className='c_button'>
                        <button onClick={handlePayment} className="c_pay_button">Pay Now</button>
                    </div>
                </div>
            </div>
            <Navbar />
        </>
    );
}

export default Cart;
