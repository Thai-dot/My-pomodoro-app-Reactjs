import React from 'react'
import styled from "styled-components";
import avatar from "../assets/avatar.jpg"
import {AiFillFacebook,AiFillGithub,AiFillYoutube} from "react-icons/ai"

const About = () => {
    return (
        <Wrapper>
           <div style={{textAlign: "center", marginBottom: 25, fontSize:55}}>About Me</div>
           <img src={avatar} style={{borderRadius: "50%",marginBottom: 25}} alt="avartar" width={95} height={95} />
           <div>Nguyễn Hoàng Thái</div>
           <div>2001</div>
           <div>Bến Tre</div>
           <div className='refContainer'>
               <a href="https://www.facebook.com/nguyenthai7871/" className='icons' target="_blank">
                <AiFillFacebook />
               </a>
               <a href="https://github.com/Thai-dot" className='icons' target="_blank">
                <AiFillGithub />
               </a>
               <a href="https://www.youtube.com/channel/UCIxApakrUNszaYWc6_f6SQA" className='icons' target="_blank">
                <AiFillYoutube />
               </a>
               

               
           </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    
    width: 85vw;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .refContainer{
      width: 250px;
      margin-top: 25px;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
  }

  a{
      text-transform: none;
  }

  .icons{

      transition: all 0.3s linear;
      font-size: 2.5rem;
  }

  .icons:hover{
    font-size: 3.5rem;
  }

`;
export default About
