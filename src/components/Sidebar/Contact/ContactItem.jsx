import Image from "design/Image";
import React, { useEffect } from "react";
import ProfileImg from "assets/images/Ammar.jpg";
import Title from "design/Title";
import Message from "design/Message";
import dayjs from "dayjs";
import styled from "@emotion/styled";
import { StanderS } from "utils/StanderStyles";
import { colors } from "libs/Theme";
import { useStore } from "libs";
import { messageController } from "libs/Functions";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ContactItem = ({ friend }) => {
  const navigate = useNavigate()
  const location = useLocation();
  const friendId = location.pathname.slice(1);
  const { messages, setCurrentFriend, socket, updateMessages } = useStore();
  const { lastMessageContent, lastMessageDate, UnseenMessages } =
    messageController(messages, friend);

  const isToday =
    dayjs(new Date()).format("YYYY:MM:DD") ===
    dayjs(lastMessageDate).format("YYYY:MM:DD");

  const handelCurrentFriend = () => {
    setCurrentFriend(friend);
    navigate(`/${friend._id}`)

    socket.emit('seen', friend._id)

    
  }

  return (
    <ItemContainer onClick={handelCurrentFriend}>
      <ItemText>
        <Image src={friend.avatar} alt="profile image" />
        <div>
          <Title animation={false}>{friend.name}</Title>
          <Message size="small">{lastMessageContent}</Message>
        </div>
      </ItemText>

      <ItemState>
        {lastMessageDate &&
          (isToday
            ? dayjs(lastMessageDate).format("hh:mm A")
            : dayjs(lastMessageDate).format("YYYY:MM:DD"))}
        {UnseenMessages.length > 0 && <Unseen>{UnseenMessages.length}</Unseen>}
      </ItemState>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  background: transparent;
  ${StanderS.Center("row", "space-between", "center")}
  padding: 15px;
  margin-bottom: 10px;
  background-color: ${colors.cardBg};
  /* box-shadow: -4px -5px 3px 1px #5656563b; */
  &:hover {
    background-color: ${colors.hover};
  }

  &:active {
    background-color: ${colors.active};
    transform: translateX(-10px);
  }

  cursor: pointer;
`;

const ItemText = styled.div`
  ${StanderS.Center("row", "start", "center")}
`;

const ItemState = styled.div`
  ${StanderS.Center("column", "center", "center")}
  color: ${colors.icons_color};
`;

const Unseen = styled.div`
  ${StanderS.Center("row", "center", "center")}
  color: ${colors.sub_title};
  margin-top: 5px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: ${colors.green};
`;

export default ContactItem;
