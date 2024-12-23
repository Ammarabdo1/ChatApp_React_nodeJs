import React from "react";
import Header from "./ChatHeader";
import styled from "@emotion/styled";
import { colors } from "libs/Theme";
import ChatMessages from "./ChatMessages";
import ChatFooter from "./ChatFooter";
import { useLocation } from "react-router-dom";
const Chat = () => {
  const location = useLocation()
  const friendId = location.pathname.slice(1);
  return (
    <ChatContainer>
      <Header />
      <ChatMessages/>
      <ChatFooter/>
    </ChatContainer>
  );
};

const ChatContainer = styled.div`
  position: relative;
  width: 75vw;
  height: 100vh;
  overflow: hidden;
  background-color: ${colors.cardBg};
`;

export default Chat;
