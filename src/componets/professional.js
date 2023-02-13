import React from 'react'
import "../Styles/main.css";
import cocoo from "../Img/img.jpg";
import cocooo from "../Img/imgface.jpeg";
import { ButtonGroup,Divider,Stack,Image,Heading,Text,Button,Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';

 function Professional() {
  return (
    <div>

<h2 className="topic8">PROFESSIONAL QUALIFICATION AND TRAINING</h2>

    <h6 className='paragrhap2'>Certified member of Sri Lanka Association of Hair and Beauticians
Certified training course by NINA RICCI, Paris. (1998)</h6>

<br></br>

<h6 className='paragrhap2'>Diploma (01 year) from CG Design & Beauty Academy, Sri Lanka. (2000)</h6>
<br></br>
<h6 className='paragrhap2'>Advance training workshop on KEUNE hair techniques, (2005)
Advanced Diploma programme by WELLA hair care professionals (2008)</h6>
<br></br>
<h6 className='paragrhap2'>Advance training seminar on L’OREAL hair colour by certified
L’Oreal technicians from India. (2007)</h6>
<br></br>
<h6 className='paragrhap2'>TONI & GUY workshop on hair cutting techniques & hair coloring (2003)
TONI & GUY Vadering Intensive Course. UK (unable to complete one hair</h6>
<br></br>
<h6 className='paragrhap2'>cut as I had to return to Sri Lanka for family emergency. The report card is available to
show )</h6>
<br></br>
<h6 className='paragrhap2'>Colour Technique Training- Kevin Murphy Australia – (2020)</h6>
<br></br>


<Image className="img4" src={cocoo} alt="coco" />
<br></br>
<hr></hr>

<section>

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










</section>

    </div>
  )
}

export default Professional;
