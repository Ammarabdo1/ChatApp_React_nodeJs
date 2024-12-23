import axios from "axios";
export const sendData = async (
  path,
  values,
  setUser,
  setToken,
  setError,
  navigate
) => {
  try {
    const response = await axios.post(
      `http://localhost:8000/user/${path}`,
      values
    );
    const data = response?.data;
    if (data.error) {
      setError(data.error);
      return;
    }
    setUser(data.user);
    setToken(data.token);
    navigate("/");
    setError("");
  } catch (e) {
    setError("An error occurred! Please try again. ");
    console.error(e);
  }
};

export const getFriends = async (token, setFriends) => {
  try {
    const response = await axios.get("http://localhost:8000/user", {
      headers: {
        Authorization: token,
      },
    });

    // Safely extract users from the response
    const users = response?.data?.users || [];
    setFriends(users);
  } catch (error) {
    console.error("Error fetching friends:", error.message);
  }
};

export const getMessages = async (token, setMessages) => {
  try {
    const response = await axios.get("http://localhost:8000/message", {
      headers: {
        Authorization: token,
      },
    });

    // Safely extract users from the response
    const messages = response?.data?.messages || [];
    setMessages(messages);
  } catch (error) {
    console.error("Error fetching friends:", error.message);
  }
};
