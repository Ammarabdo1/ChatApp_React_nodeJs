import styled from "@emotion/styled";
import { Button } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { colors } from "libs/Theme";
import { StanderS } from "utils/StanderStyles";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Dropzone = () => {
  Aos.init()
  return (
    <DropContainer data-aos='zoom-in' data-aos-duration="1000" >
      <input type="file" id="upload" />
      <label htmlFor="upload">
        <UploadImg variant="contained" component="span">
          <CameraAltIcon/>
          <span>Change the profile picture</span>
        </UploadImg>
      </label>
    </DropContainer>
  );
};

const DropContainer = styled.div`
  width: fit-content;
  background: transparent;
  input {
    display: none;
  }
`;

const UploadImg = styled(Button)`
  padding: 10px;
  background-color: transparent;
  width: 12vw;
  height: 12vw;
  border-radius: 50%;
  ${StanderS.Center('column', 'center', 'center')}
  border: 1px solid ${colors.active};
  svg {
    font-size: 2.5vw;
    margin-bottom: 10px;
  }

  span {
    font-size: 1vw;
    text-align: center;
    text-transform: lowercase;
  }

  transition: all .3s ease;
  &:hover {
    opacity: .8;
    transform: scale(1.1);
  }
`;

export default Dropzone;
