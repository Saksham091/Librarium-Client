import './main.css'
import book_1 from '../../../assets/book_1.png'
import book_2 from '../../../assets/book_2.png'
import book_3 from '../../../assets/book_3.png'
import book_4 from '../../../assets/book_4.png'
import book_5 from '../../../assets/book_5.png'
import book_6 from '../../../assets/book_6.png'
import stand from '../../../assets/stand.png'
import {FaShippingFast, FaLock, FaRedoAlt, FaHeadset} from 'react-icons/fa'

function Main() {

  return (
    <>
      <section class="home" id="home">

        <div class="row">

          <div class="content">
            <h3>upto 75% off</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deserunt nostrum accusamus. Nam alias sit necessitatibus, aliquid ex minima at!</p>
            <a href="#" class="btn">shop now</a>
          </div>

          <div class="books-slider">
            <div class="wrapper">
              <a href="#" class=""><img src={book_1} alt="book" /></a>
              <a href="#" class=""><img src={book_2} alt="book" /></a>
              <a href="#" class=""><img src={book_3} alt="book" /></a>
              <a href="#" class=""><img src={book_4} alt="book" /></a>
              <a href="#" class=""><img src={book_5} alt="book" /></a>
              <a href="#" class=""><img src={book_6} alt="book" /></a>
            </div>
            <img src={stand} class="stand" alt="stand" />
          </div>

        </div>

      </section>

      <section class="icons-container">

        <div class="icons">
          <i> <FaShippingFast/> </i>
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