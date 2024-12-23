import React from "react";
import styled from "@emotion/styled";
import Image from "design/Image";
import ProfileImg from "assets/images/Ammar.jpg";
import { colors } from "libs/Theme";
import { StanderS } from "utils/StanderStyles";
import Title from "design/Title";
import Aos from "aos";

const NoSelectedUser = () => {
  Aos.init();
  return (
    <Container>
      <img src={ProfileImg} data-aos='zoom-out' data-aos-duration='1000' />
      <Title> Welcome in ammar chat app</Title>
    </Container>
  );
};

const Container = styled.div`
  ${StanderS.Center("column")}
  width: 75vw;
  height: 100vh;
  overflow: hidden;
  background-color: ${colors.cardBg};
  img {
    width: 200px;
    border-radius: 50%;
  }
`;

export default NoSelectedUser;
