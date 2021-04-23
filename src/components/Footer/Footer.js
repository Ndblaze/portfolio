import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'

const Footer = () => {
    return (
        <FooterContainer>
            <Content>
                <Link to="nav"> <h1>Blaze.</h1> </Link>
                <Text> Thanks For Checking Out My Page, Best regards James </Text>
            </Content>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div`
  height: 70px;
  background: #FF033E;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Content = styled.div`
   display: flex;
   justify-content: space-around;
   align-items: center;
   width: 70%;

   h1{
       color: #fff;
       margin: 0;
   }

   @media screen and (max-width: 768px){
       width: 80%; 

       h1{
        font-size: 1.5rem;
      }  
   }
`
const Text = styled.h2`
   font-size: 1rem;
   color: #fff;
   margin: 0;

   @media screen and (max-width: 768px){
       width: 80%; 
       font-size: 0.6rem;  
   }
`  



