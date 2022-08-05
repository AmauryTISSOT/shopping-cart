import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 50px;
  gap: 50px;
  font-size: 18px;
  font-weight: bold;
`;

const Title = styled.h1`
  margin: 30px;
  font-size: 44px;
  font-weight: bolder;
  text-align: center;
`;

const Image = styled.img`
  width: 250px;
  height: 250px;
  border: 2px solid black;
  border-radius: 5%;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 15px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;

// Mock Product data
const productList = [
  {
    name: "SmartWatch",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ducimus!",
    price: 20.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80",
  },
  {
    name: "Car",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ducimus!",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
  },
];

const Products = () => {
  return (
    <div>
      <Header />
      <Title>Products</Title>
      <Container>
        {productList.map((product) => (
          <div key={product.name}>
            <Text>
              <div>{product.name}</div>
              <div>{product.description}</div>
              <Image src={product.image} alt={product.name} />
              <div style={{ color: "white" }}>$ {product.price}</div>
              <Button>Add to cart</Button>
            </Text>
          </div>
        ))}
      </Container>
      <Footer />
    </div>
  );
};

export default Products;
