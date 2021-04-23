import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { FaBars } from 'react-icons/fa';

const Navbar = ({scroll}) => {

     const [drop, setDrop] = useState(false);

     const handleDrop = () => {
         setDrop(!drop);
     }


    return (
        <>
          <Nav id="nav" scroll={scroll}>
              <NavContainer>
                  <NavLogo>
                      Blaze.
                  </NavLogo>
                  <MobileIcon onClick={handleDrop}>
                      <Dropdown  drop={drop}>
                           <ul>
                               <LinkS smooth={true} duration={1000} to="home"> <li> <List> <p> Home </p> </List> </li>  </LinkS> 
                               <LinkS smooth={true} duration={1000} to="about"> <li> <List> <p> About </p> </List> </li>  </LinkS>
                               <LinkS smooth={true} duration={1000} to="service"> <li> <List> <p> Service </p> </List> </li> </LinkS>  
                               <LinkS smooth={true} duration={1000} to="skills"> <li> <List> <p> Skills </p> </List> </li>  </LinkS>
                               <LinkS smooth={true} duration={1000} to="projects"> <li> <List> <p> Projects </p> </List> </li>  </LinkS>
                               <LinkS smooth={true} duration={1000} to="contact"> <li> <List> <p> Contact me </p> </List> </li>  </LinkS>
                           </ul>
                      </Dropdown>
                      <Bars />
                      <LinkM to="contact"> <button>Contact me</button> </LinkM>
                  </MobileIcon>
                  <NavLink>
                      <Link smooth={true} duration={1000} to='home' > Home </Link>
                      <Link smooth={true} duration={1000} to='about'> About </Link>
                      <Link smooth={true} duration={1000} to='service'> Service </Link>
                      <Link smooth={true} duration={1000} to="skills"> Skills </Link>
                      <Link smooth={true} duration={1000} to="projects"> Projects </Link>
                      <Link smooth={true} duration={1000} to="contact"> <button>Contact me</button> </Link>
                  </NavLink>
              </NavContainer>
          </Nav>  
        </>
    )
}

export default Navbar


const Nav = styled.div`
    background: #E9EBED;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    position: sticky;
    top: 0;
    z-index: 10;
    border: none;
    border-bottom: ${({scroll}) => scroll ? '3px solid #000' : '2px solid #f4f4f4'};
`
//#f4f4f4
const NavContainer = styled.div`
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 200px;


    @media screen and (max-width: 1200px){
        padding: 0 100px;
    }
`

const NavLogo = styled.div`
     width: 50px;
     font-size: 3rem;
     font-weight: 900;

     @media screen and (max-width: 768px){
        font-size: 2.5rem;
        font-weight: 900; 
        margin-left: -50px;
    }
`

const Dropdown = styled.div`
    display: ${({drop}) => drop ? 'flex' : 'none'};
    position: relative;
    left: -20px;
    top: 100px;
    background: #fff;
    width: 130px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
   // border: 1px solid #fff;
    
    ul{
        list-style: none;
        margin: 0;
        padding: 0;
    }
`

const List = styled.div`
   margin-bottom: 2px;
   background: #000;
   width: 130px;
   text-align: center;
   cursor: pointer;
    
    p{
        font-size: 1rem;
        color: #fff;
        margin: 0;
        padding: 5px;  
    }
`

const MobileIcon = styled.div`
       display: none;
       font-size: 1.5rem;
       color: #000;
         
       @media screen and (max-width: 768px){
        margin-right: -50px;
        color: #FF033E;
    }
       

       @media screen and (max-width: 1000px){
           display: flex;
           justify-content: space-between;
           align-items: center;
           
       }
`

const Bars = styled(FaBars)`
   margin-right: 20px;
   
`

const LinkM = styled(LinkS)`
   display: none;

   @media screen and (max-width: 768px){
           display: none;

           button{
            display: none; 
           }
       }
   @media screen and (max-width: 1000px){
           display: block;
       }


    button{
            font-size:1rem;
            cursor: pointer;
            color: #000;
            font-weight: 500;   
            background: #FF033E;
            border: 2px solid #FF033E;
            border-radius: 30px;
            padding-top: 0.7rem;
            padding-bottom: 0.7rem;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            outline: none;

        :hover{
            background: none;
            border: 2px solid #FF033E;
        }
        }
     
`

const NavLink = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 50%;

    @media screen and (max-width: 1300px){
        width: 60%;
    }

    @media screen and (max-width: 1000px){
        display: none;
    }
`

const Link = styled(LinkS)`
    font-size:1rem;
    color: #000;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none; 

    button{
        font-size:1rem;
        cursor: pointer;
        color: #000;
        font-weight: 500;   
        background: #FF033E;
        border: 2px solid #FF033E;
        border-radius: 30px;
        padding-top: 0.7rem;
        padding-bottom: 0.7rem;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        outline: none;
        margin-left: 0;

        :hover{
            background: none;
            border: 2px solid #FF033E;
        }
    }


    @media screen and (max-width: 1300px){
        font-size:0.9rem;  
         
        button{
        font-size:0.9rem;   
        margin-left: 10px;
        }
    }
`









