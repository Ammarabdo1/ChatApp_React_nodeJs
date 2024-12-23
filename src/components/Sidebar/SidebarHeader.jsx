import React from "react";
// import ProfileImg from "assets/images/Ammar.jpg";
import Image from "design/Image";
import Title from "design/Title";
import styled from "@emotion/styled";
import { StanderS } from "utils/StanderStyles";
import { colors } from "libs/Theme";
import { useStore } from "libs";

const SidebarHeader = ({setShowProfile}) => {
  const {user} = useStore()
  return (
    <HeaderSection>
      <HeaderContainer>
        <Image src={user.avatar} setShowProfile={setShowProfile} />
        <Title>{user.name}</Title>
      </HeaderContainer>
    </HeaderSection>
  );
};

const HeaderSection = styled.div`
  ${StanderS.Center("row", "start", "center")}
  width: 100%;
  height: 100px;
  background: ${colors.bg};
`;

const HeaderContainer = styled.div`
  ${StanderS.Center("row", "start", "center")}
  width: 52%;
  padding: 20px;
  margin-left: 15px 0;
  img {
    cursor: pointer;
    transition: .2s;
    &:hover {
      opacity: .8;
      transform: scale(1.1);
    }
  }
`;

export default SidebarHeader;
