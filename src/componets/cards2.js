import "../Styles/main.css";
import cover from "../Img/cover1.png";
import { SimpleGrid,Box } from '@chakra-ui/react'
import rounded1 from "../Img/rounded1.png";
import rounded2 from "../Img/rounded2.png";
import rounded3 from "../Img/rounded3.png";
import rounded4 from "../Img/rounded4.png";
import rounded5 from "../Img/rounded5.png";
import rounded6 from "../Img/rounded6.png";
import rounded7 from "../Img/rounded7.png";
import rounded8 from "../Img/rounded8.png";
import big1 from "../Img/big1.png";
import big2 from "../Img/big2.png";
import big3 from "../Img/big3.png";

import { ButtonGroup,Divider,Stack,Image,Heading,Text,Button,Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';

function Cards2() {
    return(   
        
        <div>

            <section>
            <SimpleGrid className="grid1" minChildWidth='120px' spacing='40px'>
            <Box  height='80px'>

            <Image className="img1" src={rounded1}  />
            <h2 className="topic9">Lorem ipsum</h2>
            <br></br>
            <p className="paragrhap5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>Aenean diam dolor,</p> 

            </Box>

            <Box  height='80px'>

            <Image className="img1" src={rounded2}  />

            <h2 className="topic9">Lorem ipsum</h2>
            <br></br>
            <p className="paragrhap5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>Aenean diam dolor,</p> 

            </Box>

            <Box  height='80px'>

            <Image className="img1" src={rounded3}  />

            <h2 className="topic9">Lorem ipsum</h2>
            <br></br>
            <p className="paragrhap5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>Aenean diam dolor,</p> 

            </Box>

            <Box height='80px'>

            <Image className="img1" src={rounded4}  />

            <h2 className="topic9">Lorem ipsum</h2>
            <br></br>
            <p className="paragrhap5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>Aenean diam dolor,</p> 

            </Box>
            </SimpleGrid>

            </section>



            <section>

            <SimpleGrid className="grid2" minChildWidth='120px' spacing='40px'>
            <Box  height='80px'>

            <Image className="img1" src={rounded5}  />
            <h2 className="topic9">Lorem ipsum</h2>
            

            </Box>

            <Box  height='80px'>

            <Image className="img1" src={rounded6}  />

            <h2 className="topic9">Lorem ipsum</h2>
           

            </Box>

            <Box  height='80px'>

            <Image className="img1" src={rounded7}  />

            <h2 className="topic9">Lorem ipsum</h2>
            

            </Box>

            <Box height='80px'>

            <Image className="img1" src={rounded8}  />

            <h2 className="topic9">Lorem ipsum</h2>
           

            </Box>
            </SimpleGrid>

            </section>




            <section>
            <SimpleGrid className="grid3" columns={[3]} spacing='40px'>
            <Box  height='80px'>

            <Image className="img1" src={big1}  />
            <h2 className="topic9">Lorem ipsum</h2>
            </Box>
            <Box  height='80px'>

            <Image className="img1" src={big2}  />
            <h2 className="topic9">Lorem ipsum</h2>
            </Box>
            <Box  height='80px'>

            <Image className="img1" src={big3}  />
            <h2 className="topic9">Lorem ipsum</h2>
            
            </Box>
            </SimpleGrid>
            </section>

            
            


        </div>

        
    );
}

export default Cards2;