import './arrival.css'
import book_1 from '../../../assets/book_1.png'
import book_2 from '../../../assets/book_2.png'
import book_3 from '../../../assets/book_3.png'
import book_4 from '../../../assets/book_4.png'
import book_5 from '../../../assets/book_5.png'
import book_6 from '../../../assets/book_6.png'
import book_7 from '../../../assets/book_7.png'
import book_8 from '../../../assets/book_8.png'
import book_9 from '../../../assets/book_9.png'
import book_10 from '../../../assets/book_10.png'
import {FaStar, FaStarHalfAlt} from 'react-icons/fa'
import {FiStar} from 'react-icons/fi'

function Arrival() {

  return (
    <>
      <section class="arrivals" id="arrivals">

        <h1 class="heading"> <span>new arrivals</span> </h1>

        <div class="arrivals-slider">

          <div class="a_wrapper">

            <a href="#" class="box">
              <div class="image">
                <img src={book_1} alt="book"/>
              </div>
              <div class="content">
                <h3>Magic Map</h3>
                <div class="price">Rs 275 <span>Rs550</span></div>
                <div class="stars">
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FiStar /> </i>
                </div>
              </div>
            </a>

            <a href="#" class="box">
              <div class="image">
                <img src={book_2} alt="book"/>
              </div>
              <div class="content">
                <h3>Wishing Pond</h3>
                <div class="price">Rs 390 <span>Rs780</span></div>
                <div class="stars">
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                </div>
              </div>
            </a>

            <a href="#" class="box">
              <div class="image">
                <img src={book_3} alt="book"/>
              </div>
              <div class="content">
                <h3>Starship Kid</h3>
                <div class="price">Rs 315 <span>Rs630</span></div>
                <div class="stars">
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStarHalfAlt /> </i>
                </div>
              </div>
            </a>

            <a href="#" class="box">
              <div class="image">
                <img src={book_4} alt="book"/>
              </div>
              <div class="content">
                <h3>Fairy Secret</h3>
                <div class="price">Rs 150 <span>Rs300</span></div>
                <div class="stars">
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FiStar /> </i>
                </div>
              </div>
            </a>

            <a href="#" class="box">
              <div class="image">
                <img src={book_5} alt="book"/>
              </div>
              <div class="content">
                <h3>Beats and Tunes</h3>
                <div class="price">Rs 225 <br/><span>Rs 450</span></div>
                <div class="stars">
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStarHalfAlt /> </i>
                </div>
              </div>
            </a>

          </div>

        </div>

        <div class="arrivals-slider">

          <div class="a_wrapper">

            <a href="#" class="box">
              <div class="image">
                <img src={book_6} alt="book"/>
              </div>
              <div class="content">
                <h3>The Magic Treehouse Adventure</h3>
                <div class="price">Rs 85 <br /><span>Rs170</span></div>
                <div class="stars">
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                </div>
              </div>
            </a>

            <a href="#" class="box">
              <div class="image">
                <img src={book_7} alt="book"/>
              </div>
              <div class="content">
                <h3>Timeless Treasures</h3>
                <div class="price">RS 340 <span>Rs680</span></div>
                <div class="stars">
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FiStar /> </i>
                </div>
              </div>
            </a>

            <a href="#" class="box">
              <div class="image">
                <img src={book_8} alt="book"/>
              </div>
              <div class="content">
                <h3>Knowledge Explorers</h3>
                <div class="price">Rs 440 <span>Rs880</span></div>
                <div class="stars">
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                </div>
              </div>
            </a>

            <a href="#" class="box">
              <div class="image">
                <img src={book_9} alt="book"/>
              </div>
              <div class="content">
                <h3>The Language of Our Hearts</h3>
                <div class="price">Rs 75 <br/> <span>Rs150</span></div>
                <div class="stars">
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStarHalfAlt /> </i>
                </div>
              </div>
            </a>

            <a href="#" class="box">
              <div class="image">
                <img src={book_10} alt="book"/>
              </div>
              <div class="content">
                <h3>Vintage Wonders</h3>
                <div class="price">Rs 100 <span>Rs200</span></div>
                <div class="stars">
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStarHalfAlt /> </i>
                </div>
              </div>
            </a>

          </div>

        </div>

      </section>
    </>
  )

}

export default Arrival;