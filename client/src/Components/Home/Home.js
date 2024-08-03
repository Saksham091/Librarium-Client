import Arrivals from './Arrivals/Arrival'
import Deal from './Deal/Deal'
import Featured from './Featured/Featured'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Main from './Main/Main'
import Navbar from './Navbar/Navbar'
import Newsletter from './Newsletter/Newsletter'

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';



function Home () {    

    const location = useLocation();

  useEffect(() => {
    const sectionId = location.hash.substring(1);
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        window.scrollTo({
          behavior: 'smooth',
          top: element.offsetTop,
        });
      }
    } else {
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
        <Footer />
        </>
    )
}

export default Home