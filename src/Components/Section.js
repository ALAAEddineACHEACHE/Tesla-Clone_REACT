import React from 'react'
import styled from "styled-components"
import "./Section.css"
import Home from "./Home"
import Fade from 'react-reveal/Fade';

function Section({title,description,backgroundImage,leftBtnText,rightBtnText}) {
    return (
            <Wrap bgImage={backgroundImage}>
                    <Fade bottom>
                <ItemText>
                   <h1>{title}</h1>
                   <p>{description}</p>
                </ItemText>
                </Fade>
                <Buttons>
            <Fade Bottom>
            <ButtonGroup>   
                <LeftButton>
                    {leftBtnText}
                        </LeftButton>
                {rightBtnText &&
                <RightButton>
                    {rightBtnText}
                </RightButton>
            }
            </ButtonGroup>
        </Fade>
               <DownArrow/>
                
                </Buttons>
                </Wrap>
        
    )

}
export default Section
const Wrap = styled.div`
width:100vw;
height:100vh;
background-postion:center;
background-size:cover;
background-repeat:no-repeat;
display:flex;   
flex-direction:column;
justify-content:space-between;//vertical alignement
align-items:center;//horizontal
background-image:${props => `url("../../images/${props.bgImage}")`};    

`
const ItemText = styled.div`
padding-top:15vh;
text-align:center;
`
const Buttons = styled.div`
`
const ButtonGroup=styled.div`
display:flex;
margin-bottom:-20px;
@media(max-width:768px){
    flex-direction:column;
}

`
const LeftButton = styled.div`
background-color:rgba(23,26,32,0.8);
height:40px;
width:256px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.85;
text-transform:uppercase;
font-size:12px;
cursor:pointer;
margin:8px;
`
const RightButton = styled(LeftButton)`
background:white;
opacity:0.65;
color:black;
`
const DownArrow = styled.div`
marign-top:40px;
height:40px;
`
