import React, { useEffect, useState } from 'react';
import Header from '../Home/Header/Header';
import './cart.css';

function Cart() {
    const [cart, setCart] = useState([]);
    const email = sessionStorage.getItem('UserEmail')

    useEffect(() => {
        const fetchCart = async () => {
                fetch(`${process.env.REACT_APP_API_URL}cart/all?email=${email}`)
                .then((data)=>data.json())
                .then((res)=>{
                    console.log("res",res)
                    if(res){
                        setCart(res.cart)
                    console.log("cart",cart)
                    }
                    
                })
                .catch((error)=>console.log(error))
        };
        fetchCart();
    }, []);

    return (
        <>
            <div>
                <Header />
                <div className="c_container">
                    {
                        cart.length>0 ?(
                            cart.map((data)=>{
                                return(
                                <div className='c_book_details'>
                                <img src={data.image} alt="Book Cover" className='c_book_img' />
                                <div className='c_book_info'>
                                    <h2 className='c_book_name'>{data.name}</h2>
                                    <p className='c_author'>Author: {data.author}</p>
                                    <p className='c_description'>Description:{data.description}</p>
                                    <div className="c_actions">
                                        <div className="c_price"> Price: Rs {data.price}</div>
                                    </div>
                                </div>
                            </div>
                                )
                            })                    
                      ):(<div className='error_code'>
                        No Books Added In Cart
                      </div>)
}
                </div>
            </div>
        </>
    );
}

export default Cart;
