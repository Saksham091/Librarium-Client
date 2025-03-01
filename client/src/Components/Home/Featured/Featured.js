import './featured.css'
import { FaHeart, FaEye } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { EffectCoverflow, Autoplay, Navigation } from 'swiper/modules';

function Featured() {

  const [book, setBook] = useState([]);
  const token = sessionStorage.getItem('userId')

  const fetchBooks = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}book/display?limit=10`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setBook(data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    fetchBooks();
  }, [])

  return (
    <>
      <section class="featured" id="featured">

        <h1 class="heading"> <span>Featured Books</span> </h1>

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

            {
              book.map((book) => {
                return (

                  <SwiperSlide className='slideswiper'>
                    <div class="swiper-slide box">
                      <div class="icons">
                        <Link to={"/wishlist"} className='a_heart'> <FaHeart /> </Link>
                      </div>
                      <div class="image">
                        <Link to={`/book/${book._id}`} class="">
                          <img src={book.image} alt="book" />
                        </Link>
                      </div>
                      <div class="content">
                        <h3>{book.name}</h3>
                        <div class="price"><span> Rs {parseInt(book.price) + parseInt(book.price)}</span> Rs {book.price}</div>
                        <Link to={"/cart"} class="btn"> Add to cart</Link>
                      </div>
                    </div>
                  </SwiperSlide>

                )
              })
            }

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