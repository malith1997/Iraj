import "../Styles/main.css";
import coco from "../Img/cover.svg";
import { ButtonGroup,Divider,Stack,Image,Heading,Text,Button,Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';

function Topic() {
    return(   
        
        <div><section>
            <h2 className="topic1">Hi,I'm Iraj</h2>
            <h6 className="topic2">A tenacious,creative and energetic hairstylist who <br></br> enjoyes creating worksof art with each haircut.</h6>
            <Button className="BtnCard">
            <a className="textcolor">Work With Me</a>
          </Button>
          </section>
        </div>

        
    );
}

export default Topic;