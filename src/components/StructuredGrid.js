import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 5px;
  margin-top: 25px;
  gap: 10px;
  height: 500px;
`;

const Item1 = styled.div`
  background-color: blue;
`;

const Item2 = styled.div`
  background-color: red;
`;

const StructuredGrid = () => {
  return (
    <Container>
      <Item1 />
      <Item2 />
    </Container>
  );
};

export default StructuredGrid;
