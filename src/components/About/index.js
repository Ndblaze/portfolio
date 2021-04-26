import React from 'react'
import styled from 'styled-components'

const About = () => {


    const string = () =>{
        return(
             <p>
                 I'm James and I'm a software Developer from Abuja, Nigeria. I enjoy taking challanges 
                or complex problems and turning them into simple and beautiful interface designs. I love 
                the logic and structure of coding itself and alway push my self to writing elegant and efficient codes.
                when I'm not coding, you will find me in the gym, or me playing football or video games. <br /><br />

                pursuing a career in computer science has alway been my dream as a child, and seeing where I am now
                and where I will be in the future, I'm sure i am on the right track. <br />
                I have worked with Languages/Frameworks/Libraries/Tools like: HTML, CSS, Javascript, Node.js, React.js , Firebase,
                gitHub, Styled-components etc..  <br /><br />

                I'm fluent in HTML, CSS, Javascript and also frameworks/Libraries like: React, JQuery, Bootstrap.
             </p>
        )
    }

    const trancate = (n) => {
        const str = string()
        return str?.length > n ? str.substr(0, n-1) + ", ..." : str;
    }
 

    return (
        <AboutContainer id='about'>
            <AboutWrapper>
                <Left>
                    <h1>About me</h1>
                    <p>--- <span>who i am</span> ---</p>
                </Left>
                <Right>
                    <h1>I'm James and I'm a software Dev.</h1>
                        {trancate(300)}
                </Right>
            </AboutWrapper>
        </AboutContainer>
    )
}

export default About

const AboutContainer = styled.div`
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 2px solid #f4f4f4;
    min-height: 65vh;
`

const AboutWrapper = styled.div`
    background: transparent;
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    width: 100%;
    padding: 10px 200px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr;
        padding: 10px 30px; 
    }

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr;
        padding: 10px 10px; 
    }
    
`

const Left = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;

    h1{
        color: #fff;  
        text-decoration: underline; 
    }

    p{
        text-align: center;
        color: #fff;
        font-weight: 900;
    }

    span{
        color: #FF033E;
        font-weight: 500;
    }
`

const Right = styled.div`
     padding: 20px;

     h1{
         font-size: 2rem;
         color: #FF033E;
        
     }

     p{
         font-size: 1rem;
         line-height: 25px;
         color: #fff;
     }
`
