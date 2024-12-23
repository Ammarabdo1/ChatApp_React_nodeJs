import React, { useState } from "react";
import styled from "@emotion/styled";
import { Alert, Button, InputAdornment, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import { colors } from "libs/Theme";
import ErrorMessage from "design/ErrorMessage";
import { StanderS } from "utils/StanderStyles";
import Aos from 'aos'
import 'aos/dist/aos.css'

const EditableInput = (props) => {
  Aos.init()
  const [isEditable, setIsEditable] = useState(false);
  return (
    <Container>
      <EditInput
        data-aos='flip-right'
        data-aos-duration='1500'
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        label={props.label}
        id={props.label}
        disabled={!isEditable}
        InputProps={{
          endAdornment: (
            <InputAdornment direction="end">
              {isEditable ? (
                <Button disabled={props.error} ><CheckIcon onClick={() => setIsEditable(false)} /></Button>
              ) : (
                <Button><EditIcon onClick={() => setIsEditable(true)} /></Button>
              )}
            </InputAdornment>
          ),
        }}
      />
      {props.error && props.touched && (
        <ErrorMessage>{props.error}</ErrorMessage>
      )}
    </Container>
  );
};

const Container = styled.div`
  ${StanderS.Center('column', 'center', 'center')}
`

const EditInput = styled(TextField)`
  width: 95%;
  background-color: ${colors.cardBg};
  .MuiInputLabel-root {
    color: ${colors.sub_title}; // Label color: ;
  }
  .MuiInputBase-input {
    color: ${colors.title}
  }
`;

// const ErrorMessage = styled(Alert)`
//   background-color: transparent;
// `;

export default EditableInput;
