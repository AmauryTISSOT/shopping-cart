import React, { useState } from "react";
import styled from "styled-components";

const DropdownTitle = styled.div`
  display: inline-block;
`;

const DropdownContent = styled.div`
  position: absolute;
  top: 80px;
  left: 0px;
  right: 0px;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 30px;
  z-index: 1;
`;

const ListElement = styled.div`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ListItem = (props) => {
  return (
    <ListElement>
      <li>{props.value}</li>
    </ListElement>
  );
};

function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ListElement>
      {numbers.map((number) => (
        <ListItem key={number.toString()} value={number} />
      ))}
    </ListElement>
  );
}

const DropdownMenu = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <DropdownTitle onClick={() => setOpen(!open)}>
      {" "}
      {props.name}
      <DropdownContent style={{ display: open ? "block" : "none" }}>
        <NumberList numbers={props.list} />
      </DropdownContent>
    </DropdownTitle>
  );
};

export default DropdownMenu;
