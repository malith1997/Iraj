import Nav from '../componets/Nav';
import {chakraProvider}  from '@chakra-ui/react';
import React from 'react';
import Hero from '../componets/Hero';
import Topic from '../componets/HeroTopic';
import About from '../componets/About';
import CoverImage from '../componets/AboutImg';
import Cards from '../componets/Cards';
import Topic2 from '../componets/Service';
import Topic3 from '../componets/Works';
import AboutDis from '../componets/AboutDis';
import { Link } from "react-router-dom";
import Professional from '../componets/professional';
// import InstagramEmbed1 from './componets/insta';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'



function Home() {
  return (
    <React.Fragment>

      <Nav />
      <Hero />
      <Topic />
      <About />
      <CoverImage />
      <Topic2 />
      <Cards />
      <Topic3 />
      {/* <InstagramEmbed1 /> */}

      
     
      
    </React.Fragment>
    
  );
}

export default Home;
