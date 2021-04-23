import React from 'react'
import styled from 'styled-components'
import { DiJavascript } from 'react-icons/di'
import{ FaReact, FaPaintBrush } from 'react-icons/fa'

const Service = () => {
    return (
        <ServiceContainer id='service'>
            <ServiceWrapper>
                <h1>My services</h1>
                <p>-- <span>What I Provide</span> --</p>
                <Services>
                    <Item>
                        <FaPaintBrush />
                        <h1> Web Dev</h1>
                    </Item>
                    <Item>
                        <DiJavascript />
                       <h1> Javascript Dev</h1>
                    </Item>
                    <Item>
                        <FaReact />
                        <h1> React Dev</h1>
                    </Item>
                    
                </Services>
            </ServiceWrapper>
            
        </ServiceContainer>
    )
}

export default Service


const ServiceContainer = styled.div`
    background: #E9EBED;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 2px solid #f4f4f4;
    min-height: 65vh;
`

const ServiceWrapper = styled.div`
    background: transparent;
    width: 100%;
    padding: 10px 200px 50px 200px;

    h1{
        text-align: center;
        margin: 0;
        text-decoration: underline;
    }

    p{
        text-align: center;
        color: #000;
        font-weight: 900;
    }

    span{
        color: #FF033E;
        font-weight: 500;
    }

    @media screen and (max-width: 1300px){
        padding: 10px 50px 50px 50px;
    }
`

const Services = styled.div`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      margin-top: 50px;
      grid-gap: 20px;

      @media screen and (max-width: 900px){
        grid-template-columns: 1fr 1fr;
      }

      @media screen and (max-width: 700px){
        grid-template-columns: 350px;
        align-items:center;
        justify-content: center;
      }
`

const Item = styled.div`
      height: 250px;
      background: #fff;
      border-radius: 10px;
      border: none;
      text-align: center;
      color: red;
      font-size: 3rem;
      padding: 10px;

      h1{
          color: #000;
          font-size: 1.5rem;
        
      }

      :hover{
         color: #000;
         background: #FF033E;
      }

      @media screen and (max-width: 768px){
        height: 200px;

        h1{
            font-size: 1rem;
        }
      }
`

