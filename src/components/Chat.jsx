import React from 'react'
import {BsFillCameraVideoFill, BsPersonFillAdd} from 'react-icons/bs'
import {FiMoreHorizontal} from 'react-icons/fi'
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>yoyo</span>
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
