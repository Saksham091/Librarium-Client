import './featured.css'
import book_1 from '../../assets/book_1.png'
import book_2 from '../../assets/book_2.png'
import book_3 from '../../assets/book_3.png'
import book_4 from '../../assets/book_4.png'
import book_5 from '../../assets/book_5.png'
import book_6 from '../../assets/book_6.png'
import book_7 from '../../assets/book_7.png'
import book_8 from '../../assets/book_8.png'
import book_9 from '../../assets/book_9.png'
import book_10 from '../../assets/book_10.png'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { FiStar } from 'react-icons/fi'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { EffectCoverflow, Autoplay, Navigation } from 'swiper/modules';

function Arrival() {

  return (
    <>
      <section class="arrivals" id="arrivals">

        <h1 class="heading"> <span>new arrivals</span> </h1>

        <div class="arrivals-slider">
          <Swiper
            effect={'coverflow'}
            slidesPerView={3}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true,
            }}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Autoplay, Navigation]}
            className="swiper_container swiper-wrapper"
          >
            <SwiperSlide className='slideswiper'>
              <a href="#" class="box">
                <div class="image">
                  <img src={book_1} alt="book" />
                </div>
                <div class="content">
                  <h3>new arrivals</h3>
                  <div class="price">$15.99 <span>$20.99</span></div>
                  <div class="stars">
                    <i> <FaStar /> </i>
                    <i> <FaStar /> </i>
                    <i> <FaStar /> </i>
                    <i> <FaStar /> </i>
                    <i> <FiStar /> </i>
                  </div>
                </div>
              </a>
            </SwiperSlide>

            <SwiperSlide className='slideswiper'>
              <a href="#" class="box">
                <div class="image">
                  <img src={book_2} alt="book" />
                </div>
                <div class="content">
                  <h3>new arrivals</h3>
                  <div class="price">$15.99 <span>$20.99</span></div>
                  <div class="stars">
                    <i> <FaStar /> </i>
                    <i> <FaStar /> </i>
                    <i> <FaStar /> </i>
                    <i> <FaStar /> </i>
                    <i> <FaStar /> </i>
                  </div>
                </div>
              </a>
            </SwiperSlide>

            <SwiperSlide className='slideswiper'>
              <a href="#" class="box">
                <div class="image">
                  <img src={book_3} alt="book" />
                </div>
                <div class="content">
                  <h3>new arrivals</h3>
                  <div class="price">$15.99 <span>$20.99</span></div>
                  <div class="stars">
                    <i> <FaStar /> </i>
                    <i> <FaStar /> </i>
                    <i> <FaStar /> </i>
                    <i> <FaStar /> </i>
                    <i> <FaStarHalfAlt /> </i>
                  </div>
                </div>
              </a>
            </SwiperSlide>

            <SwiperSlide className='slideswiper'>
              <a href="#" class="box">
                <div class="image">
                  <img src={book_4} alt="book" />
                </div>
                <div class="content">
                  <h3>new arrivals</h3>
                  <div class="price">$15.99 <span>$20.99</span></div>
                  <div class="stars">
                    <i> <FaStar /> </i>
                    <i> <FaStar /> </i>
                    <i> <FaStar /> </i>
                    <i> <FaStar /> </i>
                    <i> <FiStar /> </i>
                  </div>
                </div>
              </a>
            </SwiperSlide>

            <SwiperSlide className='slideswiper'>
              <a href="#" class="box">
                <div class="image">
                  <img src={book_5} alt="book" />
                </div>
                <div class="content">
                  <h3>new arrivals</h3>
                  <div class="price">$15.99 <span>$20.99</span></div>
                  <div class="stars">
                    <i> <FaStar /> </i>
                    <i> <FaStar /> </i>
                    <i> <FaStar /> </i>
                    <i> <FaStar /> </i>
                    <i> <FaStarHalfAlt /> </i>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          </Swiper>

        </div>

        <div class="arrivals-slider">
          <Swiper
            effect={'coverflow'}
            slidesPerView={3}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true,
            }}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Autoplay, Navigation]}
            className="swiper_container swiper-wrapper"
          >

<SwiperSlide className='slideswiper'>
            <a href="#" class="box">
              <div class="image">
                <img src={book_6} alt="book" />
              </div>
              <div class="content">
                <h3>new arrivals</h3>
                <div class="price">$15.99 <span>$20.99</span></div>
                <div class="stars">
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                </div>
              </div>
            </a>
            </SwiperSlide>

            <SwiperSlide className='slideswiper'>
            <a href="#" class="box">
              <div class="image">
                <img src={book_7} alt="book" />
              </div>
              <div class="content">
                <h3>new arrivals</h3>
                <div class="price">$15.99 <span>$20.99</span></div>
                <div class="stars">
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FiStar /> </i>
                </div>
              </div>
            </a>
            </SwiperSlide>

            <SwiperSlide className='slideswiper'>
            <a href="#" class="box">
              <div class="image">
                <img src={book_8} alt="book" />
              </div>
              <div class="content">
                <h3>new arrivals</h3>
                <div class="price">$15.99 <span>$20.99</span></div>
                <div class="stars">
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                </div>
              </div>
            </a>
            </SwiperSlide>

            <SwiperSlide className='slideswiper'>
            <a href="#" class="box">
              <div class="image">
                <img src={book_9} alt="book" />
              </div>
              <div class="content">
                <h3>new arrivals</h3>
                <div class="price">$15.99 <span>$20.99</span></div>
                <div class="stars">
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStarHalfAlt /> </i>
                </div>
              </div>
            </a>
            </SwiperSlide>

            <SwiperSlide className='slideswiper'>
            <a href="#" class="box">
              <div class="image">
                <img src={book_10} alt="book" />
              </div>
              <div class="content">
                <h3>new arrivals</h3>
                <div class="price">$15.99 <span>$20.99</span></div>
                <div class="stars">
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStar /> </i>
                  <i> <FaStarHalfAlt /> </i>
                </div>
              </div>
            </a>
            </SwiperSlide>
          </Swiper>
        </div>

      </section>
    </>
  )

}

export default Arrival;