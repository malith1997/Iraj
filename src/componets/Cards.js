import "../Styles/main.css";
import Img1 from "../Img/a.png";
import Img2 from "../Img/b.png";
import Img3 from "../Img/c.png";
import Img4 from "../Img/d.png";
import Img5 from "../Img/e.png";
import Img6 from "../Img/f.png";
import { ButtonGroup,Divider,Stack,Image,Heading,Text,Button,Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';


function Cards() {
    return( 
        
        
        <div className="container2">

  
       <div className="row">
        <div className="column1" >
            <div className="content1">     
                <div className="card1">    
                <div className="container">
                    <Image className="img3" src={Img1} alt="img" />
                    <h2>Lorem ipsum</h2>
                    <br></br>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>Aenean diam dolor,</p> 
                </div>
                </div>
             </div>    
        </div>

        <div className="column1" >
        <div className="content1">     
                <div className="card1">    
                <div className="container">
                    <Image className="img3" src={Img2} alt="img" />
                    <h2>Lorem ipsum</h2>
                    <br></br>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>Aenean diam dolor,</p> 
                </div>
                </div>
             </div>    
        </div>
        <div className="column1" >
        <div className="content1">     
                <div className="card1">    
                <div className="container">
                    <Image className="img3" src={Img3} alt="img" />
                    <h2>Lorem ipsum</h2>
                    <br></br>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>Aenean diam dolor,</p> 
                </div>
                </div>
             </div>    
        </div>
        </div>


        {/* asads */}

        <div className="row">
        <div className="column1" >
        <div className="content1">     
                <div className="card1">    
                <div className="container">
                    <Image className="img3" src={Img4} alt="img" />
                    <h2>Lorem ipsum</h2>
                    <br></br>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>Aenean diam dolor,</p> 
                </div>
                </div>
             </div>    
        </div>
        <div className="column1" >
        <div className="content1">     
                <div className="card1">    
                <div className="container">
                    <Image className="img3" src={Img5} alt="img" />
                    <h2>Lorem ipsum</h2>
                    <br></br>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>Aenean diam dolor,</p> 
                </div>
                </div>
             </div>    
        </div>
        <div className="column1" >
        <div className="content1">     
                <div className="card1">    
                <div className="container">
                    <Image className="img3" src={Img6} alt="img" />
                    <h2>Lorem ipsum</h2>
                    <br></br>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>Aenean diam dolor,</p> 
                </div>
                </div>
             </div>    
        </div>
        </div>
        
       
        </div>

        
    );
}

export default Cards;