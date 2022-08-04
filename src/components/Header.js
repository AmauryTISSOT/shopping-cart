import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import DropdownMenu from "./DropdownMenu";

const Container = styled.div`
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100 vw;
  background-color: white;
`;

const Logo = styled.h1`
  font-size: 20 px;
  font-weight: bold;
  margin-left: 50 px;
  margin-right: 50 px;
`;

const ListItems = styled.li`
  margin-left: 30px;
  cursor: pointer;
`;

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  font-weight: bold;
  padding-left: 50px;

  /* ${ListItems}:hover {
    color: lightblue;
  } ; */
`;
const Icon = styled.div`
  cursor: pointer;
`;

const Right = styled.div`
  flex: 3;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  margin-left: 30px;
  ${Icon}:hover {
    color: lightblue;
  }
`;

const Header = () => {
  return (
    <Container>
      <Logo>Apacks</Logo>
      <Right>
        <List>
          <ListItems>
            <DropdownMenu
              name="SHOP"
              list={[
                "Shelters",
                "Backpacks",
                "Sleeping Bags",
                "Clothing",
                "Accessories",
                "Bargains",
              ]}
            />
          </ListItems>
          <ListItems>ADVENTURES</ListItems>
          <ListItems>ARTICLES</ListItems>
          <ListItems>GIVING BACK TOGETHER</ListItems>
          <ListItems>SUSTAINABILITY</ListItems>
        </List>
      </Right>
      <Left>
        <Icon>
          <SearchIcon />
        </Icon>
        <Icon>
          <LanguageIcon />
        </Icon>
        <Icon>
          <PersonIcon />
        </Icon>
        <Icon>
          <ShoppingCartIcon />
        </Icon>
        <Icon>
          <MenuIcon />
        </Icon>
      </Left>
    </Container>
  );
};

export default Header;
