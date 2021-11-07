import React from 'react'
import styled from 'styled-components'
const Container = styled.div `
display: flex;
height: 100%;

`
const Left = styled.div `
width: 50%;
`
const Right = styled.div `
width: 50%;
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;

`
const Title = styled.p`
font-size:55px; `
const Subtittle = styled.p`
margin-top: 15px;
font-size: 33px;
`
const Des = styled.p`
margin-top: 20px;
font-size: 17px;
color:#777;

`
const Button = styled.button`
color: white;
padding: 15px 20px;
background-color: darkblue;
border-radius: 20px;
border: none;
letter-spacing: 2px;
margin-top: 20px;
font-size: 17px;
`

function Feature() {
    return (
       <Container>
           <Left>
               
           </Left>
           <Right>
           <Title>
               <b>Good </b> 
                    design <br />
                    <b>Good </b>  bussiness
               </Title>
               <Subtittle>
                   We know that good design means good business.
               </Subtittle>
               <Des>
                   We help our clients by creating brand identities, digital experiences and print materials that communicate clearly, archive marketing goals and look fantastic. we care your business and garantee you to archive marketing goals.
               </Des>
               <Des>
                   We care your business and gauranteeyou to achieve marketing goals.
               </Des>
               <Button> Learn More</Button>
           </Right>
       </Container>
    )
}

export default Feature
