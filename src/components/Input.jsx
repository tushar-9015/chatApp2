import React from 'react'
import {MdOutlineAttachFile} from 'react-icons/md'
import {BsImage} from 'react-icons/bs'

const Input = () => {
  return (
    <div className='input'>
      <input type='text' placeholder='Type something...' />
      <div className='send'>
        <MdOutlineAttachFile />
        <input type='file' style={{display: 'none'}} id='file'/>
        <label htmlFor='file'>
        <BsImage />
        </label>
        <button>send</button>
      </div>
    </div>
  )
}

export default Input
