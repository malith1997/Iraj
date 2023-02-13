import {chakraProvider}  from '@chakra-ui/react';
import React from 'react';
import Home from './Pages/Home';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Redirect
} from "react-router-dom";

import About from './Pages/About';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Nav from './componets/Nav'
import AboutDis from './componets/AboutDis';



function App() {
  return (

    // <React.Fragment>
    //  <Home />  
    // </React.Fragment>

    
   
    
      // <Router>

      //   <React.Fragment exact path="./Pages/Home">
      //     <Home/>
      //   </React.Fragment>

      //   <React.Fragment path="./Pages/About">
      //     <About/>
      //   </React.Fragment>

      //   <React.Fragment path="/Contact">
      //     <Contact/>
      //   </React.Fragment>

      //   <React.Fragment path="/Services">
      //     <Services/>
      //   </React.Fragment> 

      //   </Router>


      <Router>

        
      

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
       
       
      </Routes>
    </Router>


    // <Routes>

    //   <Route path="/About" element={<About />} />

    // </Routes>
    
 
    
  );
}

export default App;
