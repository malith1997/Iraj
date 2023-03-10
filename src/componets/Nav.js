import { useRef } from "react";
import "../Styles/main.css";
import { Link } from "react-router-dom";
import { ButtonGroup,Divider,Stack,Image,Heading,Text,Button,Card, CardHeader, CardBody, CardFooter,Box,SimpleGrid } from '@chakra-ui/react';
import menue from "../Img/menue.png";
import cancel from "../Img/cancel.png";

function Nav() {
    const navRef = useRef();

    const showNav = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return(   
        
        <header>
            <h2>Iraj Toussaint</h2>
            <nav ref={navRef}>
                {/* <Link to= "/"><a>Home</a></Link>
                <Link to= "/Services"><a>Services</a></Link>
                <Link to= "/About"><a>About</a></Link>
                <Link to= "/Contact"><a>Contact</a></Link> */}

               
                    <Link to="/">Home</Link>
               
                    <Link to="/About">About</Link>
                
                    <Link to="/Contact">Contact</Link>
               
                    <Link to="/Services">Services</Link>
                
             
                
                {/* USE FOR SMOLLER SCREEN CLOSE THE NAV */}
                <button className="nav-btn nav-close-btn" onClick={showNav}> 
                    <a>x</a>
                </button>
            </nav>




            

            {/* OPEN THE NAV IN SMOLLER SCREEN */}
            <button className="nav-btn" onClick={showNav}>
            <a><Image className="menue" src={menue} alt="post" /></a>
                </button>
        </header>

        
    );
}

export default Nav;