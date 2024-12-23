import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Button, InputAdornment, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { colors } from "libs/Theme";
import Aos from "aos";
import "aos/dist/aos.css";
import { useStore } from "libs";
import { useLocation } from "react-router-dom";

const ChatFooter = () => {
  const location = useLocation()
  const friendId = location.pathname.slice(1);
  const [message, setMessage] = useState("");
  const { socket } = useStore()
  Aos.init();

  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit('send_message', { friendId, content: message })
    setMessage("");
  }

  useEffect(() => {
    if(message) {
      socket.emit('typing', friendId);
    }
    else {
      socket.emit('stop_typing', friendId)
    }
  } ,[message])

  return (
    <Container onSubmit={sendMessage}>
      <EditInput
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        label="Send message"
        id="sendMessage"
        InputProps={{
          endAdornment: (
            <InputAdornment direction="end">
              <Button type='submit' disabled={message.length < 1}>
                <SendIcon
                  data-aos="fade-left"
                  data-aos-duration="1500"
                />
              </Button>
            </InputAdornment>
          ),
        }}
      />
    </Container>
  );
};

const Container = styled.form`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
`;

const EditInput = styled(TextField)`
  width: 100%;
  background-color: ${colors.hover};
  .MuiInputLabel-root {
    color: ${colors.sub_title}; // Label color: ;
  }
  .MuiInputBase-input {
    color: ${colors.title};
  }
`;

export default ChatFooter;
