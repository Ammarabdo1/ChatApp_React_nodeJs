import React from "react";
import Message from "design/Message";
import styled from "@emotion/styled";
import dayjs from "dayjs";
import { StanderS } from "utils/StanderStyles";

const MessageItem = (props) => {

  return (
    <Container isSender={props.isSender}>
      <Item isSender={props.isSender}>
        <Message>{props.message.content}</Message>
        <Time> {dayjs(props.message.createdAt).format("hh:mm A")} </Time>
      </Item>
    </Container>
  );
};

export default MessageItem;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${(props) => (props.isSender ? "start" : "end")};
`;

const Item = styled.div`
  width: fit-content;
  ${StanderS.Center("row", "center", "center")}
  background: ${(props) =>
    props.isSender
      ? "linear-gradient(135deg, #064e3b, #10b981 50%, #064e3b)"
      : "linear-gradient(135deg, #0d1117, #32363e 50%, #0d1117)"};
  border-radius: 0 20px 20px 20px;
  padding: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  margin-top: 20px;
`;

const Time = styled.div`
  margin-left: 10px;
  color: silver;
  height: 100%;
  ${StanderS.Center("row", "center", "end")}
`;
