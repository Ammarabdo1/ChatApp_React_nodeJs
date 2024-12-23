import React from 'react'
import styled from '@emotion/styled'
import MessageItem from './MessageItem'
import { colors } from 'libs/Theme'
import Aos from "aos";
import "aos/dist/aos.css";
import { messageController } from 'libs/Functions';
import { useStore } from 'libs';

const ChatMessages = () => {
  Aos.init();

  const Messages = [
    {
      isSender: true,
      message: 'Hello every one'
    },

    {
      isSender: true,
      message: 'Welcome in my chat APP'
    },

    {
      isSender: false,
      message: 'Hi man'
    },

    {
      isSender: true,
      message: 'Welcome brother'
    },

    {
      isSender: true,
      message: 'Hello every one'
    },

    {
      isSender: true,
      message: 'Welcome in my chat APP'
    },

    {
      isSender: false,
      message: 'Hi man'
    },

    {
      isSender: true,
      message: 'Welcome brother'
    },

    {
      isSender: true,
      message: 'Hello every one'
    },

    {
      isSender: true,
      message: 'Welcome in my chat APP'
    },

    {
      isSender: false,
      message: 'Hi man'
    },

    {
      isSender: true,
      message: 'Welcome brother'
    },
    {
      isSender: true,
      message: 'Hello every one'
    },

    {
      isSender: true,
      message: 'Welcome in my chat APP'
    },

    {
      isSender: false,
      message: 'Hi man'
    },

    {
      isSender: true,
      message: 'Welcome brother'
    },

    {
      isSender: true,
      message: 'Hello every one'
    },

    {
      isSender: true,
      message: 'Welcome in my chat APP'
    },

    {
      isSender: false,
      message: 'Hi man'
    },

    {
      isSender: true,
      message: 'Welcome brother'
    },

    {
      isSender: true,
      message: 'Hello every one'
    },

    {
      isSender: true,
      message: 'Welcome in my chat APP'
    },

    {
      isSender: false,
      message: 'Hi man'
    },

    {
      isSender: true,
      message: 'end'
    },
  ]
  const {messages, currentFriend} = useStore()
  const {friendMessages} = messageController(messages, currentFriend)
  console.log(friendMessages)
  return (
    <Container data-aos={'fade-left'} data-aos-duration='1000'>
      {friendMessages.length > 0 ? friendMessages.map(m => <MessageItem isSender={m.receiverId === currentFriend._id} message={m} />) : 'Start conversation now'}
    </Container>
  )
}

const Container = styled.div`
  padding: 0px 30px;
  height: 83%;
  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background: ${colors.cardBg};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${colors.active};
    border-radius: 10px;
    border: 3px solid ${colors.cardBg};
  }

`

export default ChatMessages