import React from 'react'
import AboutDis from '../componets/AboutDis';
import Professional from '../componets/professional';
import Nav from '../componets/Nav';
import "../Styles/main.css";
import Footerr from '../componets/Footerr';

function About() {
  return (
    <React.Fragment>

      <Nav />
      <AboutDis />
      <Professional />
     
     
      <section className='footer2'>
        <Footerr />
        </section>
    </React.Fragment>
  )
}

export default About;

