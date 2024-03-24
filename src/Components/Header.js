import React,{useState} from 'react'
import styled from 'styled-components'
import "./Header.css"
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
// import {selectCars} from "../features/car/carSlice"
// import {useSelector} from 'react-redux';

function Header() {
    const [burgerStatus,setBurgerStatus] = useState(false);
    // const cars = useSelector(selectCars);
    // console.log(cars)
   
    return (
            <Container>
                <a>
                    <img src="../images/tesla.jpg" width="190px" height="80px" alt="" />
                </a>
              
                <Menu>
                    <p><a href="#">Model S</a></p>
                    <p><a href="#">Model 3</a></p>
                    <p><a href="#">Model X</a></p>
                    <p><a href="#">Model Y</a></p>
                </Menu>
                <RightMenu>
                    <a href="#">Shop</a>
                    <a href="#">Tesla Account</a>
                    <CustomMenu onClick={() => setBurgerStatus(true)}/>
                </RightMenu>
                <BurgerNav show={burgerStatus}>
                    <CloseWrapper>
                    <CustomClose onClick={() =>setBurgerStatus(false)}/>
                        </CloseWrapper>
                    <li><a href="">Existing Inventory</a></li>
                    <li><a href="">Used Inventory</a></li>
                    <li><a href="">Trade-in</a></li>
                    <li><a href="">Cybertruck</a></li>
                    <li><a href="">Roadaster</a></li>
                    <li><a href="">Existing Inventory</a></li>
                    <li><a href="">Existing Inventory</a></li>
                </BurgerNav>
            </Container>
          
  
       
    )

}
export default Header
const Container = styled.div `
    min-height:10px;
    position:fixed;
    display:flex;
    align-items:center;
justify-content:space-between;  
    padding:0 20px;
    top:0px;
    left:0;
    right:0;    
`
const Menu = styled.div `
display:flex;
align-items:center;
justify-content:center;
flex:1;
p{
    font-weight:600;
    text-transform:uppercase;
    padding:0 40px;
    flex-wrap:nowrap;
}
@media(max-width:768px){
    display:none;
}

`
const RightMenu = styled.div`
display:flex;
align-items:center;
a{
    font-weight:600;
    text-transform:uppercase;
    margin-right:10px;
}

`
const CustomMenu = styled(MenuIcon)`
cursor:pointer;

`
const BurgerNav = styled.div `
position:fixed;
top:0;
bottom:0;
right:0;
background:white;
width:300px;
z-index:16;
list-style:none;
padding:20px;
display:flex;
flex-direction:column;
justify-content:flex-start;
transform:${props =>props.show ? 'translateX(0)' : 'translateX(100%)'};
transition:transform 0.6s;
 li{
     padding:15px 0;
     border-bottom:1px solid rgba(0,0,0,.2)
 }
 a{
     font-weight:600;
 }

`
const CustomClose = styled(CloseIcon)`
cursor:pointer;
`
const CloseWrapper = styled.div`
display:flex;
justify-content:flex-end;
`
