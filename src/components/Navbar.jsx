import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 50px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.h1`
  font-weight: bold;
  text-decoration: underline;
`;
const Menu = styled.ul`
display: flex;
align-items: center;

`;
const Menuicon = styled.li`
list-style: none;
margin-right: 40px;
font-size: 20px;
font-weight: bold;
color: gray;
`;
const Button = styled.button`
border: 2px solid white;
padding: 10px 15px;
color: white;
border-radius: 10px;
font-weight: bold;
cursor: pointer;
background-color: crimson;
`;

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Tushar</Logo>
          <Menu>
            <Menuicon>Home</Menuicon>
            <Menuicon>Feature</Menuicon>
            <Menuicon>Services</Menuicon>
            <Menuicon>Pricing</Menuicon>
            <Menuicon>Contact</Menuicon>
          </Menu>
        </Left>
        <Button>Join Today</Button>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
