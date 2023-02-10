import "../Styles/main.css";
import coco from "../Img/cover.svg";
import { ButtonGroup,Divider,Stack,Image,Heading,Text,Button,Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';

function About() {
    return(   
        
        <div>
            <h2 className="topic3">About</h2>
            <h6 className="topic4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,<br></br> sed diam voluptua. At vero eos et accusam et justo duo.</h6>
            <Button className="BtnCard1">
            <a className="textcolor">Read More</a>
          </Button>
        </div>

        
    );
}

export default About;