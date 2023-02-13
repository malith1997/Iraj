import React from 'react'
import Nav from '../componets/Nav';
import "../Styles/main.css";
import errorMessageExample from '../componets/Email';
import {
  FormControl,
  FormLabel,Input,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'


import { ButtonGroup,Divider,Stack,Image,Heading,Text,Button,Card, CardHeader, CardBody, CardFooter,Box,SimpleGrid } from '@chakra-ui/react';

import big1 from "../Img/big1.png";
import big2 from "../Img/big2.png";
import big3 from "../Img/big3.png";


function Contact() {
  return (
    <div>
        

        <React.Fragment>

        <Nav />
        <errorMessageExample />

        <h1>Let’s get in touch</h1>
        <h6 className='paragrhap4'>Well hello there, wonderful, fabulous you! If you’d like to get in touch with me, please feel free to give me a call at (555) 555-5555, or send a 
        <br></br>message with the form down below. Either way, I’ll be in touch shortly!</h6>


        <section>

        <FormControl >
        <Input className='form1' placeholder='Name' />
        </FormControl>


        <FormControl >
        <FormLabel>Email address</FormLabel>
        <Input className='form2' type='email' placeholder='Email' />
        </FormControl>


        <FormControl>
        <Input className='form3' placeholder='Message' />
        </FormControl>

        
        

        </section>

        <section>
        <Button className="BtnCard3">
            <a className="textcolor">Work With Me</a>
        </Button>
        </section>


        <section>
            <SimpleGrid className="grid4" columns={[3]} spacing='40px'>
            <Box  height='80px'>

            <Image className="img1" src={big1}  />
            <p className="paragrhap6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>Aenean diam dolor,</p>
            </Box>
            <Box  height='80px'>

            <Image className="img1" src={big2}  />
            <p className="paragrhap6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>Aenean diam dolor,</p>
            </Box>
            <Box  height='80px'>

            <Image className="img1" src={big3}  />
            <p className="paragrhap6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>Aenean diam dolor,</p>
            
            </Box>
            </SimpleGrid>
        </section>



        




      </React.Fragment>
      
    </div>
  )
}

export default Contact;
