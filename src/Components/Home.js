import React from 'react'
import styled from "styled-components"
import Section from "./Section"
function Home() {
    return (
        <div>
           <Container>
               <Section
               title="Model S"
               description="Order Online for Touchless Delivery"
               backgroundImage = "model-s.jpg"
               leftBtnText="Custom order"
               rightBtnText="Existing inventory"
               />
               <Section
                 title="Model Y"
                 description="Order Online for Touchless Delivery"
                 backgroundImage = "model-y.jpg"
                 leftBtnText="Custom order"
                 rightBtnText="Existing inventory"/>
               <Section
                 title="Model X"
                 description="Order Online for Touchless Delivery"
                 backgroundImage = "model-x.jpg"
                 leftBtnText="Custom order"
                 rightBtnText="Existing inventory"/>
                 <Section 
                title = "Lowest Cost Solar Panels in America"
                description="Money-back guarantee"
                backgroundImage="solar-panel.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn More"
                />
                <Section
                title = "Solar for New Roofs"
                description = "Solar Roof Costs Less than a New Roman"
                backgroundImage="solar-roof.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn More"
                />
                <Section
                title = "Accessories"
                description = ""
                backgroundImage = "accessories.jpg"
                leftBtnText = "Shop now"
              
                />
           </Container>
        </div>
    )
}
export default Home
const Container = styled.div `
height:100vh;
`
