import React from 'react'
import styled from 'styled-components'
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa';

const Contact = () => {
    return (
        <ContactContainer id="contact">
            <ContactWrapper>
                <h1>Contacts</h1>
                <p>--- <span>Get In Touch With Me</span> --</p>
                <Content>
                <Left>
                   <h1>...</h1>
                   <p>You can get in touch with me with the avilable links and my social media, 
                       however if you are looking to reach me faster, Email, 
                       Linkedin or Phone would be your best option. </p>
                </Left>

                <Right>
                   <Socials>
                       <Item>
                           <h2>Email: <span> ndubuisieze60@gmail.com</span></h2>
                       </Item>
                       <Item>
                           <h2>Phone: <span>+2130798961871</span></h2>
                       </Item>
                       <SocialIcons>
                       <Icon> <FaInstagram /> </Icon>
                       <Icon> <FaLinkedin /> </Icon>
                       <Icon> <FaGithub /> </Icon>
                       <Icon> <FaTwitter /> </Icon>
                   </SocialIcons>
                   </Socials>
                </Right>
                </Content>
            </ContactWrapper>
        </ContactContainer>
    )
}

export default Contact


const ContactContainer = styled.div`
    
    background: #E9EBED;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 2px solid #f4f4f4;
    min-height: 50vh;
    color: #fff;

`

const ContactWrapper = styled.div`
    background: transparent;
    width: 100%;
    padding: 20px 180px 60px 180px;

    @media screen and (max-width: 900px){
        padding: 20px 60px 60px 60px;
    }

    @media screen and (max-width: 768px){
        padding: 10px 10px 20px 10px;
    }

    h1{
        text-align: center;
        margin: 0;
        text-decoration: underline;
        font-size: 2rem;
        color: #000;
    }

    p{
        text-align: center;
        font-weight: 900;
        color: #000;
    }

    span{
        color: #FF033E;
        font-weight: 500;
    }


`

const Content = styled.div`
   display: grid;
   grid-template-columns: 1fr 1.5fr;
   grid-gap: 10px;
   margin-top: 50px;
   color: #fff;

   @media screen and (max-width: 1200px){
       grid-template-columns: 1fr ;
       margin-top: 0;
   }

`


const Left = styled.div`
    padding: 10px;

    h1{
        text-align: left;
        text-decoration: none;
        font-size: 3.5rem;
    }

    p{
        text-align: left;
        font-weight: 400;
    }
`

const Right = styled.div`
    border: none;
    padding: 30px;
    background: #000;
    border-radius: 10px;

`

const Socials = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 1000px){
       grid-template-columns: 1fr ;
   }

`
const Item = styled.li`
   
    h2{
        color: #fff;
        font-size: 1.2rem;
    }

    span{
        font-size: 1rem;
    }

`

const SocialIcons = styled.div`
   display: flex;
   align-items: center;
   flex-wrap: wrap;
`

const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #f4f4f4;
    padding: 5px;
    border-radius: 50%;
    margin-right: 30px;
    font-size: 1.5rem;
    margin-top: 30px;

    :hover{
         font-size: 1.6rem;
    }
`













