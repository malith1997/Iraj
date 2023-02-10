import "../Styles/main.css";
import cover from "../Img/cover1.png";
import { ButtonGroup,Divider,Stack,Image,Heading,Text,Button,Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';

function CoverImage() {
    return(   
        
        <div>
            <Image className="img2" src={cover} alt="cover" />
        </div>

        
    );
}

export default CoverImage;