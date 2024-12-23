import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),

      token: "",
      setToken: (token) => set({ token }),

      messages: [],
      setMessages: (messages) => set({ messages }),
      addMessage: (message) =>
        set((state) => ({ messages: [...state.messages, message] })),
      updateMessages: (updateMessages) =>
        set((state) => {
          const messages = state.messages.map((msg) =>
            updateMessages.find((updateMsg) => updateMsg._id === msg._id) 
            ? {...msg, seen: true}
            :
            msg
          );
          return {messages};
        }),

      friends: [],
      setFriends: (friends) => set({ friends }),
      addFriend: (friend) =>
        set((state) => ({ friends: [...state.friend, friend] })),

      currentFriend: null,
      setCurrentFriend: (currentFriend) => set({ currentFriend }),

      socket: null,
      setSocket: (socket) => set({ socket }),

      typing: false,
      setTyping: (typing) => set({ typing }),
    }),
    {
      name: "users_auth_chat_app",
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        messages: state.messages,
        friends: state.friends,
        currentFriend: state.currentFriend,
      }),
    }
  )
);
