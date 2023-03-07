import React from 'react'
import AboutDis from '../componets/AboutDis';
import Professional from '../componets/professional';
import Nav from '../componets/Nav';
import "../Styles/main.css";
import Footer from '../componets/Footer';

function About() {
  return (
    <React.Fragment>

      <Nav />
      <AboutDis />
      <Professional />
     
     
      <section className='footer2'>
        <Footer />
        </section>
    </React.Fragment>
  )
}

export default About;

