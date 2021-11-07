import styled, { css } from "styled-components";
import Feature from "./components/Feature";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";

const Container = styled.div`
        height : 100vh;
        overflow: hidden;
        position: relative;

`
const Shape = css`
position: absolute;
top: 0;
left: 0%;
height: 100%;
width: 100%;
z-index: -1;
`
const Clip = styled.div`
${Shape}
clip-path: polygon(67% 0 , 100% 0% , 100% 100% , 55% 100%);
background-color: crimson;

`
const Clip2 = styled.div`
${Shape}
clip-path: polygon(0 0 , 55% 0% , 33% 100% , 0 100%);
background-color: pink;
`


function App() {
  return (<>
   <Container>
     <Navbar/>
     <Intro/>
     <Clip/>
   </Container>
   <Container>
     <Feature/>
     <Clip2/>
   </Container>
   </>
   
    );
}

export default App;
