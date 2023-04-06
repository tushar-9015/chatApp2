import React from 'react'
import {BsFillCameraVideoFill, BsPersonFillAdd} from 'react-icons/bs'
import {FiMoreHorizontal} from 'react-icons/fi'
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
      <div className='ChatArea'>
        <Messages />
      </div>
    </div>
  )
}

export default Chat
