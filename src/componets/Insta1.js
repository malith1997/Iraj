import React from 'react';
import "../Styles/main.css";
import Imgface from "../Img/short.jpg";
import Avatar from "../Img/iraj.png";
import Like1 from "../Img/like.png";
import Comment1 from "../Img/comment.png";
import share1 from "../Img/share.png";
import redcolor from "../Img/redcolor.jpg"
import balckcolor from "../Img/blackcolor.webp"

import { ButtonGroup,Divider,Stack,Image,Heading,Text,Button,Card, CardHeader, CardBody, CardFooter,Box,SimpleGrid } from '@chakra-ui/react';

const InstagramPost = ({ username, imageUrl, caption1,caption2,caption3, likes1,likes2,likes3 }) => {

    const redirectToInstagram = () => {
        window.location.href = 'https://www.instagram.com/p/ClIorgeoxTX/?utm_source=ig_web_copy_link';
      };

      const redirectToInstagram1 = () => {
        window.location.href = 'https://www.instagram.com/hair_by_irajtoussaint/';
      };


      const redirectToInstagram2 = () => {
        window.location.href = 'https://www.instagram.com/p/Cne6DxfoygX/?utm_source=ig_web_copy_link';
      };

      const redirectToInstagram3 = () => {
        window.location.href = 'https://www.instagram.com/p/CgYpViWhTDO/?utm_source=ig_web_copy_link';
      };

  return (




    <div className="container22">

  
    <div className="row">
     <div className="column111" >
         <div className="content1">     
                 
             
                 
                            <div className="InstagramPost">
                                <div className="InstagramPost-header">
                                <Image className="avatar1" onClick={redirectToInstagram1} src={Avatar} alt="post" />
                                <div className="InstagramPost-username">{username}</div>
                                </div>
                                <Image className="InstagramPost-image" onClick={redirectToInstagram} src={Imgface} alt="post" />
                                <div className="InstagramPost-caption">{caption1}</div>
                                <Image className="avatar2" onClick={redirectToInstagram} src={Like1} alt="post" />
                                <Image className="avatar3" onClick={redirectToInstagram} src={Comment1} alt="post" />
                                <Image className="avatar4" onClick={redirectToInstagram} src={share1} alt="post" />
                            <div className="InstagramPost-likes">{likes1} likes</div>



                            
                    
                
             </div>
          </div>    
     </div>

     <div className="column111" >
     <div className="content1">     
               


                            <div className="InstagramPost">
                                <div className="InstagramPost-header">
                                <Image className="avatar1" onClick={redirectToInstagram1} src={Avatar} alt="post" />
                                <div className="InstagramPost-username">{username}</div>
                                </div>
                                <Image className="InstagramPost-image" onClick={redirectToInstagram} src={redcolor} alt="post" />
                                <div className="InstagramPost-caption">{caption2}</div>
                                <Image className="avatar2" onClick={redirectToInstagram2} src={Like1} alt="post" />
                                <Image className="avatar3" onClick={redirectToInstagram2} src={Comment1} alt="post" />
                                <Image className="avatar4" onClick={redirectToInstagram2} src={share1} alt="post" />
                            <div className="InstagramPost-likes">{likes2} likes</div></div>


             
          </div>    
     </div>
     <div className="column111" >
     <div className="content1">     
              

             <div className="InstagramPost">
                                <div className="InstagramPost-header">
                                <Image className="avatar1" onClick={redirectToInstagram1} src={Avatar} alt="post" />
                                <div className="InstagramPost-username">{username}</div>
                                </div>
                                <Image className="InstagramPost-image" onClick={redirectToInstagram} src={balckcolor} alt="post" />
                                <div className="InstagramPost-caption">{caption3}</div>
                                <Image className="avatar2" onClick={redirectToInstagram3} src={Like1} alt="post" />
                                <Image className="avatar3" onClick={redirectToInstagram3} src={Comment1} alt="post" />
                                <Image className="avatar4" onClick={redirectToInstagram3} src={share1} alt="post" />
                            <div className="InstagramPost-likes">{likes3} likes</div>
                            </div>


             
             
          </div>    
     </div>
     </div>


    
     
    
     </div>



















    
  );
};

export default InstagramPost;