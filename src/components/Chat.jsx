import React, { useContext } from 'react'
import Messages from './Messages';
import Input from './Input'
import { ChatContext } from '../context/ChatContext';


const Chat = () => {
  const {data}= useContext(ChatContext);
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
        <i className="fas fa-video"></i>
        <i className="fa fa-user-plus" aria-hidden="true"></i>
        <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat