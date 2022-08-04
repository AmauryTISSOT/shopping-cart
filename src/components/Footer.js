import React from "react";
import styled from "styled-components";
import FooterImg from "/home/amaury/repos/shopping-cart/src/images/Footer-img.jpg";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  color: white;
  padding: 250px 150px;
`;

const BackgroundImage = styled.img`
  position: fixed;
  top: 0px;
  width: 100vw;
  height: auto;
  z-index: -1;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
`;

const Contact = styled.div`
  font-size: 28px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const Newsletter = styled.div`
  font-size: 28px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const SignUp = styled.button`
  padding: 10px 15px;
  background-color: blue;
  border: none;
  color: white;
  font-size: 24px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
`;

const Shipping = styled.div`
  font-size: 28px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  font-size: 12px;
`;

const Footer = () => {
  return (
    <div>
      <BackgroundImage src={FooterImg} alt="Forest" />
      <Container>
        <Contact>
          Contact Us
          <Text>300-000 FRANCE</Text>
          <Text>Send us a message</Text>
          <Text>Warranty and return</Text>
          <Text>Terms and conditions</Text>
        </Contact>
        <Newsletter>
          Join our Newsletter
          <SignUp>SIGN UP</SignUp>
        </Newsletter>
        <Shipping>
          Shipping
          <Text>Free shipping on $100 or more</Text>
          <Text>View our Shipping Policy</Text>
        </Shipping>
      </Container>
    </div>
  );
};

export default Footer;
