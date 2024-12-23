import React from "react";
import styled from '@emotion/styled'

const Image = ({ src, alt, setShowProfile }) => {
  return <Img src={src} alt={alt || 'Profile Img'} onClick={() => setShowProfile && setShowProfile(true)} />;
};

const Img = styled.img`
  width: 50px;
  border-radius: 50%;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  margin-right: 30px;
`;

export default Image;
