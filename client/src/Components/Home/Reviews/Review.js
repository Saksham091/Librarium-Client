import './review.css'
import pic_1 from '../../../assets/pic_1.png'
import pic_2 from '../../../assets/pic_2.png'
import pic_3 from '../../../assets/pic_3.png'
import pic_4 from '../../../assets/pic_4.png'
import pic_5 from '../../../assets/pic_5.png'
import pic_6 from '../../../assets/pic_6.png'
import {FaStar, FaStarHalfAlt} from 'react-icons/fa'
import {FiStar} from 'react-icons/fi'

function Review() {

  return (
    <>
      <section class="reviews" id="reviews">

        <h1 class="heading"> <span>client's reviews</span> </h1>

        <div class="reviews-slider">

          <div class="r_wrapper">

            <div class="box">
              <img src={pic_1} alt="pic"/>
                <h3>John Deo</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.</p>
                <div class="stars">
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                </div>
            </div>

            <div class="box">
              <img src={pic_2} alt="pic"/>
                <h3>Laura Smith</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.</p>
                <div class="stars">
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FiStar /> </i>
                </div>
            </div>

            <div class="box">
              <img src={pic_3} alt="pic"/>
                <h3>George Edward</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.</p>
                <div class="stars">
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                </div>
            </div>
            <div class="box">
              <img src={pic_4} alt="pic"/>
                <h3>Sophia Anderson</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.</p>
                <div class="stars">
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStarHalfAlt /> </i>
                </div>
            </div>

            <div class="box">
              <img src={pic_5} alt="pic"/>
                <h3>Anupam Kumar</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.</p>
                <div class="stars">
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStarHalfAlt/> </i>
                </div>
            </div>

            <div class="box">
              <img src={pic_6} alt="pic"/>
                <h3>Chloe Tan</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.</p>
                <div class="stars">
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FiStar /> </i>
                </div>
            </div>

          </div>

        </div>

      </section>
    </>
  )

}

export default Review;