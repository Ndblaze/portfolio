import React from 'react'
import './Skill.css'
import styled from 'styled-components'

const Skills = () => {
    return (
        <SkillContainer id="skills">
            <SkillWrapper>
                <h1>My Skills</h1>
                <p>--- <span>What I can Do</span> --</p>
                <Content>
                <Left>
                   <h1>...</h1>
                   <p>
                       These are the current skills I have and will bring to your workspace if hired, 
                       I also tried my best tp place them in percentage. I will be more valuable you as a web developer
                       as am Fluent in HTML, CSS, Javascript, React .....
                    </p>
                </Left>

                <Right>
                   <Items>
                     <Item>
                       <p>HTML</p>
                       <span>70%</span>
                       </Item>
                       <Line className="html" />
                   </Items>
                   <Items>
                      <Item>
                       <p>CSS</p>
                       <span>70%</span>
                       </Item>
                       <Line className="css"/>
                   </Items>
                   <Items>
                     <Item>
                       <p>BOOTSTRAP</p>
                       <span>60%</span>
                       </Item>
                       <Line className="bootstrap"/>
                   </Items>
                   <Items>
                      <Item>
                       <p>Javascript</p>
                       <span>80%</span>
                       </Item>
                       <Line className="javascript"/>
                   </Items>
                   <Items>
                     <Item>
                       <p>React</p>
                       <span>70%</span>
                       </Item>
                       <Line className="react"/>
                   </Items>
                   <Items>
                      <Item>
                       <p>Node.js</p>
                       <span>40%</span>
                       </Item>
                       <Line className="node"/>
                   </Items>
                   <Items>
                      <Item>
                       <p>PHYTON</p>
                       <span>20%</span>
                       </Item>
                       <Line className="python"/>
                   </Items>
                   <Items>
                        <Item>
                       <p>JAVA</p>
                       <span>30%</span>
                       </Item>
                       <Line className="java"/>
                   </Items>
                   <Items>
                       <Item>
                         <p>FIREBASE BACKEND</p>
                          <span>70%</span>
                       </Item>
                       <Line className='firebase'/>
                   </Items>
                </Right>
                </Content>
            </SkillWrapper>
        </SkillContainer>
    )
}

export default Skills

const SkillContainer = styled.div`
    
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 2px solid #f4f4f4;
    min-height: 60vh;
    color: #fff;

`

const SkillWrapper = styled.div`
    background: transparent;
    width: 100%;
    padding: 20px 180px 60px 180px;

    @media screen and (max-width: 1000px){
        padding: 20px 50px 60px 50px;   
   }

    h1{
        text-align: center;
        margin: 0;
        text-decoration: underline;
        font-size: 2.5rem;
    }

    p{
        text-align: center;
        font-weight: 900;
    }

    span{
        color: #FF033E;
        font-weight: 500;
    }

`

const Content = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
   grid-gap: 10px;
   margin-top: 50px;
   color: #000;

   @media screen and (max-width: 1000px){
       grid-template-columns: 1fr;
       margin-top: 0;
   }
`

const Left = styled.div`
     padding: 10px;
     color: #fff;
    h1{
        text-align: left;
        text-decoration: none;
        font-size: 3.5rem;
    }

    p{
        text-align: left;
        font-weight: 400;
        font-size: 1.5rem;
    }

    @media screen and (max-width: 768px){
        p{
        font-size: 1rem;
      }
    }
`

const Right = styled.div`
    border: none;
    padding: 30px;
    background: #E9EBED;
    border-radius: 10px;
`

const Items = styled.div`
   margin-bottom: 15px;
`

const Item = styled.div`
  display: flex;
  justify-content: space-between;
   
  p{
      margin: 0;
      padding: 0;
      font-weight: 500;
  }

  span{
      color: #000;
  }

`

const Line = styled.div`
    background: lightgray;
    height: 5px;
    position: relative;
    border-radius: 20px;

    ::before{
        content: "";
        height: 100%;
        position: absolute;
        background: red;
        border-radius: 20px;
    }

    
`