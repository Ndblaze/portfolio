import React from 'react'
import styled from 'styled-components'
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa';
import blaze from '../../images/Nd.jpg'
import {Link} from 'react-scroll'

const First = () => {
    return (
        <HomeContainer id='home'>
            <HomeWrapper>
                <Left>
                   <SocialIcons>
                       <Icon> <FaInstagram /> </Icon>
                       <Icon> <FaLinkedin /> </Icon>
                       <Icon> <FaGithub /> </Icon>
                       <Icon> <FaTwitter /> </Icon>
                   </SocialIcons>
                   <Hello>
                       Hello, my name is...
                   </Hello>
                   <Name>
                       I am James Eze
                   </Name>
                   <OverView>
                       I'm Ndubuisi James Eze, and I'm software developer with strong passion for my career.
                       I am currently seeking for an internship opportunity this summer 2021 to grow in experience 
                       and build high quality web applications. Read about me, check out my skills and my personal projects 
                       below and reach out to me via email or linkedin if you have an opportunity for me. Thank you. 
                   </OverView>
                   <Link smooth={true} duration={1000} to="projects">
                        <Button>
                                My Projects 
                        </Button>
                   </Link>
                </Left>
                <Right>
                    <img src={blaze} alt="blaze" />
                </Right>
            </HomeWrapper>
        </HomeContainer>
    )
}

export default First

const HomeContainer = styled.div`
    background: #E9EBED;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
`

const HomeWrapper = styled.div`
    background: transparent;
    display: grid;
    grid-gap: 50px;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    padding: 0 200px;

       @media screen and (max-width: 1200px){
        padding: 0 90px;
        grid-template-columns: 1fr 1fr;
      }

    @media screen and (max-width: 900px){
        grid-template-columns: 1fr; 
        padding: 0 50px;  
    }

`

const Left = styled.div`
     max-width: 700px;

`

const Right = styled.div`
    width:350px;
    height: 350px;
    margin-left: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    
  img{
      width: 100%;
      border-radius: 10px;
  }

  @media screen and (max-width: 1200px){
    width:270px;
    height: 270px;  
    margin-top: 40px; 
  }
  @media screen and (max-width: 900px){
      display: none;
  }


`

const SocialIcons = styled.div`
   display: flex;
   align-items: center;
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

    :hover{
         font-size: 1.8rem;
    }
`

const Hello = styled.h3`
    text-transform: uppercase;
    margin: 40px 0 0 0 ;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.6);
`

const Name = styled.h1`
    font-size: 3.2rem;
    font-weight: 700;
    margin: 0;

    @media screen and (max-width:1300px){
        font-size: 2.3rem;
    }
    
`

const OverView= styled.p`
    font-size: 1rem;
    font-weight: 400;

    @media screen and (max-width:1000px){
        font-size: 1.1rem;
    }

    @media screen and (max-width:768px){
        font-size: 0.9rem;
    }
`

const Button = styled.button`
    font-size:1rem;
    color: #000;
    font-weight: 700;   
    border: 2px solid #FF033E;
    border-radius: 30px;
    padding-top: 0.7rem;
    padding-bottom: 0.7rem;
    padding-left: 2rem;
    padding-right: 2rem;

    :hover{
         background: #FF033E;
    }

`
