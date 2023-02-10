import "../Styles/main.css";
import coco from "../Img/cover.svg";
import { ButtonGroup,Divider,Stack,Image,Heading,Text,Button,Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';

function Hero() {
    return(   
        
        <div>
            <Image className="img1" src={coco} alt="coco" />
        </div>

        
    );
}

export default Hero;