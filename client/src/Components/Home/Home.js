import Arrivals from './Arrivals/Arrival'
import Blogs from './Blogs/Blog'
import Deal from './Deal/Deal'
import Featured from './Featured/Featured'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Main from './Main/Main'
import Navbar from './Navbar/Navbar'
import Newsletter from './Newsletter/Newsletter'
import Reviews from './Reviews/Review'

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';



function Home () {    

    const location = useLocation();

  useEffect(() => {
    // Extract the section ID from the current route (location.hash)
    const sectionId = location.hash.substring(1);

    // Scroll to the section if an ID is provided
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        window.scrollTo({
          behavior: 'smooth',
          top: element.offsetTop,
        });
      }
    } else {
      // If no ID is provided, scroll to the top of the page
      window.scrollTo({
        behavior: 'smooth',
        top: 0,
      });
    }
  }, [location]);


    return (
        <>
        <Header />
        <Navbar />
        <Main />
        <Featured />
        <Newsletter />
        <Arrivals />
        <Deal />
        <Reviews />
        <Blogs />
        <Footer />
        </>
    )
}

export default Home