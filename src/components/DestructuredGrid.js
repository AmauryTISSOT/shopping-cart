import React from "react";
import styled from "styled-components";
import tent1 from "../images/tent1.jpg";
import hike1 from "../images/hike1.jpg";
import raincoat from "../images/raincoat.jpg";
import backpack1 from "../images/backpack1.jpg";
import acces1 from "../images/acces1.jpg";

const Container = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
`;

const Item1 = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
`;

const Item2 = styled.div`
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 2;
`;
const Item3 = styled.div`
  grid-column-start: 5;
  grid-column-end: 6;
  grid-row-start: 1;
  grid-row-end: 2;
`;
const Item4 = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
`;
const Item5 = styled.div`
  grid-column-start: 4;
  grid-column-end: 6;
  grid-row-start: 2;
  grid-row-end: 3;
`;

const GridImage = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DestructuredGrid = () => {
  return (
    <Container>
      <Item1>
        <GridImage src={tent1} alt="tent" />
      </Item1>
      <Item2>
        <GridImage src={hike1} alt="tent" />
      </Item2>
      <Item3>
        <GridImage src={raincoat} alt="tent" />
      </Item3>
      <Item4>
        <GridImage src={backpack1} alt="tent" />
      </Item4>
      <Item5>
        <GridImage src={acces1} alt="tent" />
      </Item5>
    </Container>
  );
};

export default DestructuredGrid;
