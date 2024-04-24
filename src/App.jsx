import { useState,useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Header from './Header'
import Section01 from './Section01';
import Section02 from './Section02';
import Section03 from './Section03';
import Section04 from './Section04';
import Footer from './Footer';
function App() {
  useEffect(() => {
    setTimeout(function() {
        AOS.init({
          
        });
    }, 100);
    // AOS.refresh()
  }, []);
  return (
    <>
      <Header />
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <Footer />
    </>
  )
}

export default App
