import React from 'react'
import Cards2 from '../componets/cards2';
import Nav from '../componets/Nav';
import { ButtonGroup,Divider,Stack,Image,Heading,Text,Button,Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';


function Services() {
  return (
    <div>

     <React.Fragment>

     <Nav />

      <h2 className="topic8">“Great hair doesn’t happen <br></br>
      by chance, it happens by<br></br>
      appointment“</h2>

      <Cards2 />

      <h2 className="topic10">I’ll capture your best side at <br></br>
      your next photoshoot.</h2>

      <Button className="BtnCard2">
            <a className="textcolor">Work With Me</a>
          </Button>




     </React.Fragment>
    </div>
  )
}

export default Services;
