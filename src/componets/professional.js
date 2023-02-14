import React from 'react'
import "../Styles/main.css";
import cocoo from "../Img/img.jpg";
import cocooo from "../Img/2nd.jpeg";
import { ButtonGroup,Divider,Stack,Image,Heading,Text,Button,Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { SimpleGrid,Box } from '@chakra-ui/react'

 function Professional() {
  return (
    <div>



        <section>
        <h2 className="topic8">PROFESSIONAL QUALIFICATION AND TRAINING</h2>

            <SimpleGrid className="grid3" minChildWidth='220px' columns={[2]} spacing='40px'>
            <Box className="box3" height='80px'>

            <Image className="img4" src={cocoo} alt="coco" />
           
            </Box>


            <Box  className="box3" height='80px'>
            <section>

              <h6 className='paragrhap0'>Certified member of Sri Lanka Association of Hair and Beauticians
              Certified training course by NINA RICCI, Paris. (1998)

              <br></br><br></br>

              Diploma (01 year) from CG Design & Beauty Academy, Sri Lanka. (2000)
              <br></br><br></br>
              Advance training workshop on KEUNE hair techniques, (2005)
              Advanced Diploma programme by WELLA hair care professionals (2008)
              <br></br><br></br>
              Advance training seminar on L’OREAL hair colour by certified
              L’Oreal technicians from India. (2007)
              <br></br><br></br>
              TONI & GUY workshop on hair cutting techniques & hair coloring (2003)
              TONI & GUY Vadering Intensive Course. UK (unable to complete one hair
              <br></br><br></br>
              cut as I had to return to Sri Lanka for family emergency. The report card is available to
              show )
              <br></br><br></br>
              Colour Technique Training- Kevin Murphy Australia – (2020)</h6>
              <br></br><br></br>

              </section>
            
            
            </Box>
           
            </SimpleGrid>
            </section>

            <h2 className="topic11">PERSONAL APTITUDES</h2><br></br>

            <section>
            

            <SimpleGrid className="grid5" minChildWidth='220px' columns={[2]} spacing='40px'>
            <Box  className="box10" height='80px'>

            <h6 className='paragrhap11'>Well presented, hardworking, innovative and passionate hair stylist
              and colour technician.<br></br><br></br>

              18 years of progressive experience in the industry.
              <br></br><br></br>
              Have a proven track record for outstanding client satisfaction and
              building a loyal, high calibre client base in niche market segments.
              <br></br><br></br>
              Ability to grasp, learn and adapt new skills and innovative
              techniques
              <br></br><br></br>
              Ability to listen, study and understand clients’ needs and advise clients
              on hair care and appropriate products to suits their individual needs
              Experienced in providing technical assistance
              <br></br><br></br>
              Training and
              Grooming to a team of hair stylists in the capacity of Salon
              Manager & Trainer.</h6>
              <br></br><br></br>
           
            </Box>


            <Box  className="box3" height='80px'>
            <section>

            <Image className="img20" src={cocooo} alt="coco" />

              </section>
            
            
            </Box>
           
            </SimpleGrid>
            </section>



     

{/* <section>

<h2 className="topic8">PERSONAL APTITUDES</h2><br></br>

<h6 className='paragrhap3'>Well presented, hardworking, innovative and passionate hair stylist
and colour technician.</h6><br></br>

<h6 className='paragrhap3'>18 years of progressive experience in the industry.</h6>
<br></br>
<h6 className='paragrhap3'>Have a proven track record for outstanding client satisfaction and
building a loyal, high calibre client base in niche market segments.</h6>
<br></br>
<h6 className='paragrhap3'>Ability to grasp, learn and adapt new skills and innovative
techniques</h6>
<br></br>
<h6 className='paragrhap3'>Ability to listen, study and understand clients’ needs and advise clients
on hair care and appropriate products to suits their individual needs
Experienced in providing technical assistance</h6>
<br></br>
<h6 className='paragrhap3'>Training and
Grooming to a team of hair stylists in the capacity of Salon
Manager & Trainer.</h6>
<br></br>


<Image className="img5" src={cocooo} alt="coco" />


</section> */}

    </div>
  )
}

export default Professional;
