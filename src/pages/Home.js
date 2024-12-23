import React, { useEffect } from "react";
import Chat from "components/Chat/Chat";
import Sidebar from "components/Sidebar/Sidebar";
import { io } from "socket.io-client";
import { useStore } from "libs";
import { socketConnection } from "utils/Socket";
import { getFriends, getMessages } from "utils/API";
import { Outlet } from "react-router-dom";

const Home = () => {
  const {
    setSocket,
    token,
    addMessage,
    addFriend,
    user,
    setMessages,
    setFriends,
    setTyping,
    updateMessages,
  } = useStore();
  useEffect(() => {
    const socket = io(`http://localhost:8000?token=${token}`);
    setSocket(socket);

    getMessages(token, setMessages);
    getFriends(token, setFriends);

    return socketConnection(
      socket,
      addFriend,
      user._id,
      updateMessages,
      addMessage,
      setTyping
    );
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Home;
