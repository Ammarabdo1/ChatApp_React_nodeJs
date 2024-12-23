import React from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { colors } from "libs/Theme";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Title = ({ children, animation = true }) => {
  Aos.init()
  return <TitleS data-aos={animation && 'zoom-out'} data-aos-duration="1000" >{children}</TitleS>;
};

const TitleS = styled(Typography)`
  font-size: 1.5vw;
  color: ${colors.title};
`;

export default Title;
