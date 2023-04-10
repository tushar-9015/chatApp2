import React, { useContext } from 'react'
import {BsFillCameraVideoFill, BsPersonFillAdd} from 'react-icons/bs'
import {FiMoreHorizontal} from 'react-icons/fi'
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from '../context/ChatContext'

const Chat = () => {

  const {data} =useContext(ChatContext);
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>{DataTransfer.user?.displayName}</span>
        <div className="chatIcons">
        <BsFillCameraVideoFill />
        <BsPersonFillAdd />
        <FiMoreHorizontal />
        </div>
      </div>
        <Messages />
        <Input />
    </div>
  )
}

export default Chat
