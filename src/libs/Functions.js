export const messageController = (messages, friend) => {
  const friendMessages = messages.filter((m)=> [m.senderId, m.receiverId].includes(friend._id))
  const receivedMessages = messages.filter((m) => m.senderId === friend._id)
  const lastMessage = friendMessages.length > 0 ? friendMessages.at(-1) : null
  const lastMessageContent = lastMessage?.content || 'No messages yet...'
  const lastMessageDate = lastMessage?.createdAt || null
  const UnseenMessages = receivedMessages?.filter((m) => !m.seen)
  return {
    friendMessages,
    lastMessage,
    lastMessageContent,
    lastMessageDate,
    UnseenMessages
  }
}