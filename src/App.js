import styled from "styled-components";
import React from "react";
import Header from "./components/Header";
import Slider from "./components/Slider/Slider"
import DestructuredGrid from "./components/DestructuredGrid";

const Container = styled.div`

`;


function App() {
  return (
    <Container>
      <Header/>
      <Slider/>
      <DestructuredGrid/>
    </Container>
  );
}

export default App;

