import React, { useState } from "react";
import ContactItem from "./ContactItem";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import styled from "@emotion/styled";
import { StanderS } from "utils/StanderStyles";
import { TextField } from "@mui/material";
import { colors } from "libs/Theme";
import Aos from "aos";
import "aos/dist/aos.css";
import { useStore } from "libs";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { messageController } from "libs/Functions";

const Contact = () => {
  const { friends, messages } = useStore();
  const [input, setInput] = useState("");
  const [showUnSeenMessages, setShowUnSeenMessages] = useState(false)
  Aos.init();
  return (
    <ContactsContainer>
      <ContactsSearch data-aos="zoom-in" data-aos-duration="1000" showUnSeenMessages={showUnSeenMessages}>
        <Input
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          label="Search"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <FilterAltIcon className="filter" onClick={() => setShowUnSeenMessages(prev => !prev)} />
      </ContactsSearch>

      <ContactsSection data-aos="fade-right" data-aos-duration="1000">
        {friends
          .filter((f) => f.name.includes(input))
          .filter((f) => {
            if(showUnSeenMessages) {
              const {UnseenMessages} = messageController(messages, f);
              return UnseenMessages.length > 0;
            }
            return true
          })
          .map((friend, i) => (
            <ContactItem key={i} friend={friend} />
          ))}
      </ContactsSection>
    </ContactsContainer>
  );
};

const ContactsContainer = styled.div`
  overflow: hidden;
  background-color: ${colors.bg};
`;

const ContactsSection = styled.div`
  height: 90.5%;
  width: 100%;
  margin-top: 5px;
  overflow: scroll;
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background: ${colors.cardBg};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${colors.active};
    border-radius: 10px;
    border: 3px solid ${colors.cardBg};
  }
`;

const ContactsSearch = styled.div`
  width: 100%;
  height: 10vh;
  ${StanderS.Center()}
  background: ${colors.bg};
  .filter {
    font-size: 1.5vw;
    cursor: pointer;
    /* color: #1976D2; */
    ${props =>  `color: ${!props.showUnSeenMessages&&'#BDBDBD;'}` } 
  }
`;

const Input = styled(TextField)`
  width: 90%;
  margin-right: 7px;
  background-color: ${colors.cardBg};
  .MuiInputLabel-root {
    color: ${colors.title}; // Label color: ;
  }
  .MuiInputBase-input {
    color: ${colors.title};
  }
`;

export default Contact;
