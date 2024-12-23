import styled from "@emotion/styled";
import { colors } from "libs/Theme";
import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Title from "design/Title";
import { Button } from "@mui/material";
import { StanderS } from "utils/StanderStyles";

const ProfileHeader = ({ setShowProfile }) => {
  return (
    <Container>
      <IconContainer onClick={() => setShowProfile(false)}>
        <KeyboardBackspaceIcon />
      </IconContainer>

      <Title>Profile</Title>
    </Container>
  );
};

const Container = styled.div`
  height: 9.2vh;
  width: 100%;
  background-color: ${colors.bg};
  ${StanderS.Center("row", "start", "center")}
  border-bottom: 1px solid ${colors.hover};
`;

const IconContainer = styled(Button)`
  margin-right: 10px;
  svg {
    width: 1.5vw;
  }
`;

export default ProfileHeader;
