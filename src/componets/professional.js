import React from 'react'
import "../Styles/main.css";
import cocoo from "../Img/img.jpg";
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

    </div>
  )
}

export default Professional;
