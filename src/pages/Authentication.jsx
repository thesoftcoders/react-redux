import React from "react";
import {
  BackgroundOverlay,
  Container,
  CustomDivider,
  FormContainer,
  FormWrapper,
  Image,
  Text,
  Title,
} from "../components/Styles/StyledUIComponents";
import backgroundImage from "../assets/images/bg.png";
import logo from "../assets/images/logo.png";
import LoginForm from "../components/forms/LoginForm";
import Footer from "../components/footer/Footer";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const Authentication = () => {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();

  return !user.isAuthenticated ? (
    <BackgroundOverlay imageUrl={backgroundImage}>
      <FormWrapper>
        <FormContainer>
          <Container>
            <Image src={logo} />
            <Title>Factzz</Title>
          </Container>
          <Container width="100%">
            <LoginForm />
          </Container>
          <Container width="80%">
            <CustomDivider margin="20px 10px" />
            <Text mb="10px">Don't have an account yet?</Text>
            <Text mb="10px" color="blue" cursor="pointer">
              Sign Up For Factzz
            </Text>
          </Container>
        </FormContainer>
      </FormWrapper>
      <Footer position="absolute" bottom="0" />
    </BackgroundOverlay>
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
};

export default Authentication;
