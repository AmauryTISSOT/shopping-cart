import styled from "styled-components";
import React from "react";
import Header from "./components/Header";
import Slider from "./components/Slider/Slider"

const Container = styled.div`

`;


function App() {
  return (
    <Container>
      <Header/>
      <Slider/>
    </Container>
  );
}

export default App;

