import './footer.css'
import world_map from '../../../assets/worldmap.png'
import {FaMapMarkerAlt, FaArrowRight, FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaPinterest} from 'react-icons/fa'

function Footer() {

  return (
    <>
      <section class="footer">

        <div class="box-container">

          <div class="box">
            <h3>Our Locations</h3>
            <a href="#"> <i> <FaMapMarkerAlt/> </i> India </a>
            <a href="#"> <i> <FaMapMarkerAlt/> </i> USA </a>
            <a href="#"> <i> <FaMapMarkerAlt/> </i> Russia </a>
            <a href="#"> <i> <FaMapMarkerAlt/> </i> France </a>
            <a href="#"> <i> <FaMapMarkerAlt/> </i> Japan </a>
            <a href="#"> <i> <FaMapMarkerAlt/> </i> Africa </a>
          </div>

          <div class="box">
            <h3>Quick Links</h3>
            <a href="#"> <i> <FaArrowRight /> </i> Home </a>
            <a href="#"> <i> <FaArrowRight /> </i> Featured </a>
            <a href="#"> <i> <FaArrowRight /> </i> Arrivals </a>
            <a href="#"> <i> <FaArrowRight /> </i> Reviews </a>
            <a href="#"> <i> <FaArrowRight /> </i> Blogs </a>
          </div>

          <div class="box">
            <h3>Extra Links</h3>
            <a href="#"> <i> <FaArrowRight /> </i> Account info </a>
            <a href="#"> <i> <FaArrowRight /> </i> Ordered items </a>
            <a href="#"> <i> <FaArrowRight /> </i> Privacy policy </a>
            <a href="#"> <i> <FaArrowRight /> </i> Payment method </a>
            <a href="#"> <i> <FaArrowRight /> </i> Our serivces </a>
          </div>

          <div class="box">
            <h3>Contact Info</h3>
            <a href="#"> <i> <FaPhone /> </i> +123-456-7890 </a>
            <a href="#"> <i> <FaPhone /> </i> +111-222-3333 </a>
            <a href="#"> <i> <FaEnvelope /> </i> shaikhanas@gmail.com </a>
            <img src={world_map} class="map" alt="map"/>
          </div>

        </div>

        <div class="share">
          <a href="#" class="fab fa-facebook-f"> <FaFacebookF /> </a>
          <a href="#" class="fab fa-twitter"> <FaTwitter /> </a>
          <a href="#" class="fab fa-instagram"> <FaInstagram /> </a>
          <a href="#" class="fab fa-linkedin"> <FaLinkedin /> </a>
          <a href="#" class="fab fa-pinterest"> <FaPinterest /> </a>
        </div>

        <div class="credit"> Made By <span>Saksham Agarwal</span> | all rights reserved! </div>

      </section>

    </>
  )

}

export default Footer;