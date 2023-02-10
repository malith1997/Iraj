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

        <Home />
      

      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Services" component={Services} />
       
       
      </Routes>
    </Router>
    
   
    
  );
}

export default App;
