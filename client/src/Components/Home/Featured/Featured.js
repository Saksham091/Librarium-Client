import './featured.css'
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
import {FaHeart, FaEye } from 'react-icons/fa'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { EffectCoverflow, Autoplay, Navigation } from 'swiper/modules';

function Featured() {


  return (
    <>
      <section class="featured" id="featured">

        <h1 class="heading"> <span>featured books</span> </h1>

        <div className="container swiper featured-slider">
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
              <div class="swiper-slide box">
                <div class="icons">
                  <a href="#" class="fas fa-heart"> <FaHeart /> </a>
                  <a href="#" class="fas fa-eye"> <FaEye /> </a>
                </div>
                <div class="image">
                  <img src={book_1} alt="book" />
                </div>
                <div class="content">
                  <h3>The Art City</h3>
                  <div class="price">$15.99 <span>$20.99</span></div>
                  <a href="#" class="btn">add to cart</a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className='slideswiper'>
              <div class="swiper-slide box">
                <div class="icons">
                  <a href="#" class="fas fa-heart"> <FaHeart /> </a>
                  <a href="#" class="fas fa-eye"> <FaEye /> </a>
                </div>
                <div class="image">
                  <img src={book_2} alt="book" />
                </div>
                <div class="content">
                  <h3>Give Thanks Inn Evertime Happpy</h3>
                  <div class="price">$15.99 <span>$20.99</span></div>
                  <a href="#" class="btn">add to cart</a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className='slideswiper'>
              <div class="swiper-slide box">
                <div class="icons">
                  <a href="#" class="fas fa-heart"> <FaHeart /> </a>
                  <a href="#" class="fas fa-eye"> <FaEye /> </a>
                </div>
                <div class="image">
                  <img src={book_3} alt="book" />
                </div>
                <div class="content">
                  <h3>Your Name</h3>
                  <div class="price">$15.99 <span>$20.99</span></div>
                  <a href="#" class="btn">add to cart</a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className='slideswiper'>
              <div class="swiper-slide box">
                <div class="icons">
                  <a href="#" class="fas fa-heart"> <FaHeart /> </a>
                  <a href="#" class="fas fa-eye"> <FaEye /> </a>
                </div>
                <div class="image">
                  <img src={book_4} alt="book" />
                </div>
                <div class="content">
                  <h3>Harmony in Diversity</h3>
                  <div class="price">$15.99 <span>$20.99</span></div>
                  <a href="#" class="btn">add to cart</a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className='slideswiper'>
              <div class="swiper-slide box">
                <div class="icons">
                  <a href="#" class="fas fa-heart"> <FaHeart /> </a>
                  <a href="#" class="fas fa-eye"> <FaEye /> </a>
                </div>
                <div class="image">
                  <img src={book_5} alt="book" />
                </div>
                <div class="content">
                  <h3>The Art of Musical Instruments</h3>
                  <div class="price">$15.99 <span>$20.99</span></div>
                  <a href="#" class="btn">add to cart</a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className='slideswiper'>
              <div class="swiper-slide box">
                <div class="icons">
                  <a href="#" class="fas fa-heart"> <FaHeart /> </a>
                  <a href="#" class="fas fa-eye"> <FaEye /> </a>
                </div>
                <div class="image">
                  <img src={book_6} alt="book" />
                </div>
                <div class="content">
                  <h3>Secrets of the Forbidden Jungle</h3>
                  <div class="price">$15.99 <span>$20.99</span></div>
                  <a href="#" class="btn">add to cart</a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className='slideswiper'>
              <div class="swiper-slide box">
                <div class="icons">
                  <a href="#" class="fas fa-heart"> <FaHeart /> </a>
                  <a href="#" class="fas fa-eye"> <FaEye /> </a>
                </div>
                <div class="image">
                  <img src={book_7} alt="book" />
                </div>
                <div class="content">
                  <h3>The Guiding Star</h3>
                  <div class="price">$15.99 <span>$20.99</span></div>
                  <a href="#" class="btn">add to cart</a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className='slideswiper'>
              <div class="swiper-slide box">
                <div class="icons">
                  <a href="#" class="fas fa-heart"> <FaHeart /> </a>
                  <a href="#" class="fas fa-eye"> <FaEye /> </a>
                </div>
                <div class="image">
                  <img src={book_8} alt="book" />
                </div>
                <div class="content">
                  <h3>Foundations of Historical Studies</h3>
                  <div class="price">$15.99 <span>$20.99</span></div>
                  <a href="#" class="btn">add to cart</a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className='slideswiper'>
              <div class="swiper-slide box">
                <div class="icons">
                  <a href="#" class="fas fa-heart"> <FaHeart /> </a>
                  <a href="#" class="fas fa-eye"> <FaEye /> </a>
                </div>
                <div class="image">
                  <img src={book_9} alt="book" />
                </div>
                <div class="content">
                  <h3>A Journey Through Love</h3>
                  <div class="price">$15.99 <span>$20.99</span></div>
                  <a href="#" class="btn">add to cart</a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className='slideswiper'>
              <div class="swiper-slide box">
                <div class="icons">
                  <a href="#" class="fas fa-heart"> <FaHeart /> </a>
                  <a href="#" class="fas fa-eye"> <FaEye /> </a>
                </div>
                <div class="image">
                  <img src={book_10} alt="book" />
                </div>
                <div class="content">
                  <h3>Retro Insights: A Journey Through the Past</h3>
                  <div class="price">$15.99 <span>$20.99</span></div>
                  <a href="#" class="btn">add to cart</a>
                </div>
              </div>
            </SwiperSlide>

            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
            </div>
          </Swiper>
        </div>

      </section>
    </>
  )

}

export default Featured;