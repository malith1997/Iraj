import "../Styles/main.css";
import coco from "../Img/covernew.svg";
import Irajj from "../Img/iraj.png";
import Round from "../Img/round.png";


import { ButtonGroup,Divider,Stack,Image,Heading,Text,Button,Card, CardHeader, CardBody, CardFooter, Container } from '@chakra-ui/react';

function Hero() {
    return(   
        
        <div className='h-screen overflow-hidden relative'>
            <Image className="img1" src={coco} alt="coco" />
            <div className="imgBox">
            {/* <Image className="imgBo" src={Irajj} alt="iraj" /> */}
            </div>
            

            
        </div>

        
    );
}

export default Hero;