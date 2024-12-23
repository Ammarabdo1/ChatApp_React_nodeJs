export const socketConnection = (
  socket,
  addFriend,
  useId,
  updateMessages,
  addMessage,
  setTyping
) => {
  socket.on("connect", () => {
    console.log("connected to the sever with the id: ", socket.id);
  });

  socket.on("disconnect", () => {
    console.log("disconnected from the server");
  });

  socket.on("user_created", (user) => {
    if (user._id !== useId) {
      addFriend(user);
    }
  });

  socket.on("receive_message", (message) => {
    addMessage(message);
  });

  socket.on("isTyping", (friendId) => setTyping(true));
  socket.on("notTyping", (friendId) => setTyping(false));

  socket.on("isSeen", (updatedMessages) => {
    updateMessages(updatedMessages);
    console.log(updatedMessages)
  });

  return () => {
    socket.disconnect();
  };
};
