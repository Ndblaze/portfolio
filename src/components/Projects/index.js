import React from 'react'
import styled from 'styled-components'
import {projs} from './Data'

const Project = () => {

     const projectList = (item) => {

        return (
            <Item  image={item.image} key={item.Name}>
                <h1> {item.Name }</h1>
            </Item>
        )
     }

    return (
        <ProjectContainer id='projects'>
            <ProjectWrapper>
                <Header>My Personal Projects</Header>
                <Para>-- <span>Things i have worked on</span> --</Para>

                <Projects>
                    {projs.map((projectList))}
                </Projects>
            </ProjectWrapper>
            
        </ProjectContainer>
    )
}

export default Project

const ProjectContainer = styled.div`
    background: #E9EBED;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 2px solid #f4f4f4;
    min-height: 60vh;
`

const ProjectWrapper = styled.div`
    background: transparent;
    width: 100%;
    padding: 30px 200px 50px 200px;


    span{
        color: #FF033E;
        font-weight: 500;
    }

    @media screen and (max-width: 1300px){
        padding: 10px 50px 50px 50px;
    }

    @media screen and (max-width: 768px){
        padding: 10px 0px 20px 0px;
    }
`

const Header = styled.h1`
    text-align: center;
    margin: 0;
    text-decoration: underline;

    @media screen and (max-width: 900px){
          font-size: 1.8rem; 
    }
`

const Para  = styled.p`
    text-align: center;
    color: #000;
    font-weight: 900;

`


const Projects = styled.div`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      margin-top: 50px;
      grid-gap: 20px;

      @media screen and (max-width: 900px){
        grid-template-columns: 1fr 1fr;
      }

      @media screen and (max-width: 700px){
        grid-template-columns: 320px;
        align-items:center;
        justify-content: center;
      }
`

const Item = styled.div`
      height: 250px;
      ${({image}) => image ? `background-image: url(${image})` : 'background: #000'};
      background-position: center;
      background-size: cover;
      border-radius: 10px;
      border: none;
      text-align: center;
      padding: 10px;

      h1{
          color: #fff;
          font-size: 1.5rem;
          text-decoration: underline;
      }


      :hover{
         h1{
             display: none;
         }
      }

      @media screen and (max-width: 768px){
        height: 200px;

            h1{
            font-size: 1rem;
        }
      }
`


