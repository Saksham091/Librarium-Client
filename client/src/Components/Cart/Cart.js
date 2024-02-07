import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Home/Header/Header';
import './cart.css';
import book_1 from '../../assets/book_1.png'

function Cart() {

    return (
        <>
            <div>
                <Header />
                <div className="w_container">
                    <div className='w_book_details'>
                        <img src={book_1} alt="Book Cover" className='w_book_img' />
                        <div className='w_book_info'>
                            <h2 className='w_book_name'>Wimpy Kid</h2>
                            <p className='w_author'>Author:</p>
                            <p className='w_description'>Description:Filled with laugh-out-loud hilarious text and cartoons, the Diary of a Wimpy Kid series follows Greg Heffley as he records the daily trials and triumphs of friendship, family life and middle school where undersized weaklings have to share the hallways with kids who are taller, meaner and already shaving! On top of all that, Greg must be careful to avoid the dreaded CHEESE TOUCH!The first book in the series was published in 2007 and became instantly popular for its relatable humor. Today, more than 275 million copies have been sold around the world!</p>
                            <div className="w_actions">
                                <div className="w_price"> Price: Rs 365</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;
