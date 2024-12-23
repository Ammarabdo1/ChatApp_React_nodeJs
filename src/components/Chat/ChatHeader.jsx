import React from "react";
import styled from "@emotion/styled";
import Image from "design/Image";
// import ContactProfileImg from "assets/images/Ammar.jpg";
import Title from "design/Title";
import LogoutIcon from "@mui/icons-material/Logout";
import { StanderS } from "utils/StanderStyles";
import { colors } from "libs/Theme";
import { useStore } from "libs";
import Message from "design/Message";

const ChatHeader = () => {
  const {setToken, currentFriend, typing} = useStore()
  return (
    <ChatHeaderContainer>
      <ContactInfo>
        <Image src={currentFriend.avatar} alt="Contact profile image" />
        <TextContainer>
          <Title>{currentFriend.name}</Title>
          <Message>{typing ? "typing..." : currentFriend.status}</Message>
        </TextContainer>
      </ContactInfo>

      <Logout onClick={() => setToken('')} >
        <LogoutIcon />
      </Logout>
    </ChatHeaderContainer>
  );
};

const ChatHeaderContainer = styled.div`
  ${StanderS.Center("row", "space-between", "center")}
  padding: 10px 20px;
  background: ${colors.bg};
  width: 100%;
  height: 7.2vh;
`;

const ContactInfo = styled.div`
  ${StanderS.Center("row", "space-between", "center")}

`;

const TextContainer = styled.div`

`

const Logout = styled.div`
  ${StanderS.Center("row", "center", "center")};
  width: 120px;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export default ChatHeader;
