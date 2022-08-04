import styled from "styled-components";
import React from "react";
import Header from "./components/Header";
import Slider from "./components/Slider/Slider"
import DestructuredGrid from "./components/DestructuredGrid";
import StructuredGrid from "./components/StructuredGrid";
import Footer from "./components/Footer";

const Container = styled.div`
  margin: 0px;
  padding: 0px;
`;


function App() {
  return (
    <Container>
      <Header/>
      <Slider/>
      <DestructuredGrid/>
      <StructuredGrid/>
      <Footer/>
    </Container>
  );
}

export default App;

