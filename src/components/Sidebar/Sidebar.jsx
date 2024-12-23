import React, { useState } from "react";
import SidebarHeader from "./SidebarHeader";
import Contact from "./Contact/Contacts";
import styled from "@emotion/styled";
import { colors } from "libs/Theme";
import Profile from "components/Profile/Profile";

const Sidebar = () => {
  const [showProfile, setShowProfile] = useState(false);
  if (showProfile) {
    return (
      <SidebarContainer>
        <Profile setShowProfile={setShowProfile} />
      </SidebarContainer>
    );
  }
  return (
    <SidebarContainer>
      <SidebarHeader setShowProfile={setShowProfile} />
      <Contact />
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25vw;
  height: 100vh;
  box-shadow: ${colors.shadow};
  z-index: 20;
  background-color: ${colors.bg};
`;

export default Sidebar;
