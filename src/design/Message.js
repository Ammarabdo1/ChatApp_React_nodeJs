import React from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { colors } from "libs/Theme";

const Message = ({ children }) => {
  return <MessageS>{children}</MessageS>;
};

const MessageS = styled(Typography)`
  font-size: 1vw;
  color: ${colors.sub_title};
`;

export default Message;
